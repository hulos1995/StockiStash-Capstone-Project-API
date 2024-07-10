import express from "express";
import bcrypt from "bcryptjs";
import knex from "../db/knex.js";
const router = express.Router();
const upperCaseFirstLetter = (role) => {
  if (!role) return "";
  return role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
};
router.post("/", async (req, res) => {
  const { first_name, last_name, user_name, password, user_role } = req.body;
  if (!first_name || !last_name || !user_name || !password || !user_role) {
    return res.status(400).send("All fields are required!");
  }
  try {
    const existingUser = await knex("user").where({ user_name }).first();
    if (existingUser) {
      return res.status(400).send("User already exists");
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const formattedUserRole = upperCaseFirstLetter(user_role);
    await knex("user").insert({
      first_name,
      last_name,
      user_name,
      password: hashedPassword,
      user_role: formattedUserRole,
    });
    const newUser = await knex("user").where({ user_name }).first();
    let assignId;
    if (formattedUserRole === "Polisher") {
      assignId = 2;
    } else if (formattedUserRole === "Spotter") {
      assignId = 3;
    }
    if (assignId) {
      const inventoryData = await knex("inventory").where("user_id", assignId);
      const newInventoryItems = inventoryData.map((item) => ({
        item_name: item.item_name,
        description: item.description,
        image: item.image,
        quantity: item.quantity,
        status: item.status,
        link: item.link,
        user_id: newUser.id,
        created_at: new Date(),
        updated_at: new Date(),
      }));
      await knex("inventory").insert(newInventoryItems);
    }
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Server error");
  }
});

export default router;
