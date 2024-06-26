import "dotenv/config";
import express from "express";
import cors from "cors";
const app = express();
const { CORS_URL } = process.env;
app.use(express.json());
app.use(cors({ origin: CORS_URL }));
const PORT = process.env.PORT || 5173;
app.use(express.static("public"));
app.listen(PORT, function () {
  console.log(`App is listening on port ${PORT}`);
});
