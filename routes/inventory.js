import express from "express";
import initKnex from "knex";
import configuration from "../knexfile.js";
const router = express.Router();
const knex = initKnex(configuration);
router.route("/").get(async (_req, res) => {
  try {
    const listInventory = await knex("inventory")
      .leftJoin("grit", "inventory.id", "grit.inventory_id")
      .select(
        "inventory.*",
        knex.raw(
          'JSON_ARRAYAGG(JSON_OBJECT("id", grit.id, "grit", grit.grit, "quantity", grit.quantity, "description", grit.description, "image", grit.image)) as grits'
        )
      )
      .groupBy("inventory.id");
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
router.route("/:id").get(async (req, res) => {
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

export default router;
