import express from "express";
import initKnex from "knex";
import configuration from "../knexfile.js";
import jwt from "jsonwebtoken";
import multer from "multer";
import {
  verifyToken,
  isAdmin,
  canAccessInventory,
} from "../middleware/auth.js";
import { SECRET_KEY } from "../utils/constants.js";
import { UPLOADS_DIR } from "../utils/path.js"; 

const router = express.Router();
const knex = initKnex(configuration);

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (_req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });
// Middleware to get user role and ID from the token
const getUserRoleAndId = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET_KEY, (err, decodedToken) => {
      if (err) {
        return res.status(401).send("Unauthorized");
      }
      req.userRole = decodedToken.role;
      req.userId = decodedToken.id;
      next();
    });
  } else {
    req.userRole = "guest";
    next();
  }
};

router.get("/", getUserRoleAndId, async (req, res) => {
  try {
    let query = knex("inventory")
      .leftJoin("grit", "inventory.id", "grit.inventory_id")
      .select(
        "inventory.*",
        knex.raw(
          'JSON_ARRAYAGG(JSON_OBJECT("id", grit.id, "grit", grit.grit, "quantity", grit.quantity, "description", grit.description, "image", grit.image)) as grits'
        )
      )
      .groupBy("inventory.id")
      .orderBy("inventory.created_at", "desc");

    // Filter based on user role and ID
    if (req.userRole !== "Admin" && req.userRole !== "guest") {
      query = query.where("inventory.user_id", req.userId);
    }

    const listInventory = await query;
    const filterNull = listInventory.map((item) => ({
      ...item,
      grits: item.grits.filter((grit) => grit.id !== null),
    }));
    res.json(filterNull);
  } catch (error) {
    console.error("Error getting inventories:", error);
    return res.status(500).send("Error getting inventories");
  }
});

router.post("/", verifyToken, upload.single('image'), async (req, res) => {
  const { item_name, description, quantity, status, link, user_id } = req.body;
  // base URL of the server, to add into database
  const image = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null;
  if (!item_name || !description || !image || !quantity || !status || !link || !user_id) {
    return res.status(400).send("All fields are required");
  }
  try {
    await knex("inventory").insert({
      item_name,
      description,
      image,
      quantity,
      status,
      link,
      user_id,
      created_at: new Date(),
      updated_at: new Date(),
    });
    res.status(201).send("Inventory item added successfully");
  } catch (error) {
    console.error("Error adding inventory item:", error);
    res.status(500).send("Server error");
  }
});


router.get("/:id", verifyToken, canAccessInventory, async (req, res) => {
  try {
    const inventoryItem = await knex("inventory")
      .leftJoin("grit", "inventory.id", "grit.inventory_id")
      .select(
        "inventory.*",
        knex.raw(
          'JSON_ARRAYAGG(JSON_OBJECT("id", grit.id, "grit", grit.grit, "quantity", grit.quantity, "description", grit.description, "image", grit.image)) as grits'
        )
      )
      .where("inventory.id", req.params.id)
      .groupBy("inventory.id");

    if (inventoryItem.length === 0) {
      return res.status(404).send("Inventory item not found");
    }
    // Filter out null grit entries
    const filterNull = {
      ...inventoryItem[0],
      grits: inventoryItem[0].grits.filter((grit) => grit.id !== null),
    };
    res.json(filterNull);
  } catch (error) {
    console.error("Error fetching inventory:", error);
    res.status(400).send("Error fetching inventory");
  }
});

router.put("/:id", verifyToken, isAdmin, async (req, res) => {
  const { item_name, description, image, quantity, status, link, user_id } =
    req.body;
  try {
    const updated = await knex("inventory")
      .where({ id: req.params.id })
      .update({
        item_name,
        description,
        image,
        quantity,
        status,
        link,
        user_id,
      });
    if (updated) {
      res.send("Inventory item updated");
    } else {
      res.status(404).send("Inventory item not found");
    }
  } catch (error) {
    console.error("Error updating inventory item:", error);
    res.status(500).send("Server error");
  }
});

router.delete("/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const deleted = await knex("inventory").where({ id: req.params.id }).del();
    if (deleted) {
      res.send("Inventory item deleted");
    } else {
      res.status(404).send("Inventory item not found");
    }
  } catch (error) {
    console.error("Error deleting inventory item:", error);
    res.status(500).send("Server error");
  }
});

export default router;
