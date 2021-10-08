import express from "express";
import {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

const router = express.Router();

// http://localhost:8080/posts/ istekleri burada yapılacak
// GET, POST, DELETE, PUT, PATCH

router.get("/", getPosts);
router.get("/:id", getSinglePost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
