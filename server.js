import "dotenv/config";
import express from "express";
import cors from "cors";
import inventory from "./routes/inventory.js";
import login from "./routes/login.js";
import signup from "./routes/signup.js";
import profile from "./routes/profile.js";

const app = express();
const { CORS_URL } = process.env;

app.use(express.json());
app.use(cors({ origin: CORS_URL }));

const PORT = process.env.PORT || 5173;

app.use(express.static("public"));
app.use("/inventory", inventory);
app.use("/login", login);
app.use("/signup", signup);
app.use("/profile", profile);

app.listen(PORT, function () {
  console.log(`App is listening on port ${PORT}`);
});
