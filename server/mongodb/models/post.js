import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  prompt: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

const postToDB = mongoose.model("post", postSchema);

export default postToDB;
