import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../utils/constants.js";
import knex from "../db/knex.js";
const router = express.Router();
router.post("/", async (req, res) => {
  const { user_name, password } = req.body;
  if (!user_name || !password) {
    return res.status(404).send("Please enter the required fields");
  }
  try {
    // Find the user in the database
    const user = await knex("user").where({ user_name }).first();
    if (!user) {
      return res.status(400).send("Invalid user name");
    }
    // Validate the password
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).send("Invalid password");
    }
    // Generate a token
    const token = jwt.sign(
      { id: user.id, user_name: user.user_name, role: user.user_role },
      SECRET_KEY,
      { expiresIn: "24h" }
    );
    res.send({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});
export default router;
