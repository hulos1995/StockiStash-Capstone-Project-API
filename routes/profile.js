import express from "express";
import jwt from "jsonwebtoken";
import knex from "../db/knex.js";
import { SECRET_KEY } from "../utils/constants.js";
const router = express.Router();
// ## GET /profile
// -   Gets information about the currently logged-in user.
// -   If no valid JWT is provided, this route will respond with 401 Unauthorized.
// -   Expected headers: { Authorization: "Bearer JWT_TOKEN_HERE" }
router.get("/", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Please login");
  }
  const authHeader = req.headers.authorization;
  const authToken = authHeader.split(" ")[1];
  try {
    const decodedToken = jwt.verify(authToken, SECRET_KEY);
    const user = await knex("user").where({ id: decodedToken.id }).first();
    if (!user) {
      return res.status(404).send("User not found");
    }
    const checkUser = {
      id: user.id,
      user_name: user.user_name,
      first_name: user.first_name,
      last_name: user.last_name,
      user_role: user.user_role,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
    res.send(checkUser);
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).send("Invalid auth token");
  }
});
export default router;
