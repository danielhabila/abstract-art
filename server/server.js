import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connectDB.js";
import imagesRoute from "./routes/imagesRoute.js";
import dalleRoute from "./routes/dalleRoute.js";
import postImageRoute from "./routes/postImageRoute.js";

const port = 3000;

connectDB();

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/images", imagesRoute);
app.use("/api/dalle", dalleRoute);
app.use("/api/postToDB", postImageRoute);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
