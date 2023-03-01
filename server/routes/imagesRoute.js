import express from "express";
import * as dotenv from "dotenv";
import axios from "axios";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import postToDB from "../mongodb/models/post.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(cors());

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image?folder/prefix=abstract/popular`
    );
    const data = response.data.resources;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//Get all posts
router.get("/db", async (req, res) => {
  try {
    const posts = await postToDB.find({});

    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fetching posts failed, please try again",
    });
  }
});

// router.get("/", async (req, res) => {
//   try {
//     await cloudinary.api.resource_by_asset_id(
//       "exosev2r8qzv17adbl5x",
//       (error, result) => {
//         if (error) {
//           console.log(error);
//           return res.status(500).json({ error: "Something went wrong" });
//         }

//         res.json(result);
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// });

export default router;

// cloudinary.v2.api.resources_by_asset_folder("technology",
