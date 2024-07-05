import express from "express";
import bcrypt from "bcryptjs";
import knex from "../db/knex.js";
const router = express.Router();
// ## POST /signup
// -   Registers a new user.
// -   Expected body: { user_name, password, user_role }
router.post("/", async (req, res) => {
  const { first_name, last_name, user_name, password, user_role } = req.body;
  // Validate the input
  if (!first_name || !last_name || !user_name || !password || !user_role) {
    return res.status(400).send("All fields are required!");
  }
  try {
    // Check if the user already exists
    const existingUser = await knex("user").where({ user_name }).first();
    if (existingUser) {
      return res.status(400).send("User already exists");
    }
    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);
    // Insert the new user into the database
    await knex("user").insert({
      first_name,
      last_name,
      user_name,
      password: hashedPassword,
      user_role,
    });
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Server error");
  }
});
export default router;
