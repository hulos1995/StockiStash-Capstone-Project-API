import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../utils/constants.js";
import knex from "../db/knex.js";
// Middleware to verify the JWT token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send("No token provided");
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send("Invalid token");
    }
    req.user = decoded;
    next();
  });
};
// Middleware to check if the user is an Admin
const isAdmin = (req, res, next) => {
  if (req.user.role !== "Admin") {
    return res.status(403).send("Access Denined: Admins only");
  }
  next();
};
// Middleware to check if the user can access the inventory item
const canAccessInventory = async (req, res, next) => {
  if (req.user.role === "Admin") {
    return next();
  }
  try {
    const inventory = await knex("inventory")
      .where({ id: req.params.id })
      .first();
    if (!inventory) {
      return res.status(404).send("Inventory item not found");
    }
    if (inventory.user_id !== req.user.id) {
      return res
        .status(403)
        .send("Access Denined: You don't have access to this item");
    }
    next();
  } catch (error) {
    console.error("Error accessing inventory:", error);
    res.status(500).send("Server error");
  }
};
export { verifyToken, isAdmin, canAccessInventory };
