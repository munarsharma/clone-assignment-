const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getSinglePost,
  createNewPost,
  getUserPosts,
  editPost,
  deletePost
} = require("../db/queries/postsQueries");

router.get("/", getAllPosts);
router.get("/:id", getSinglePost);
router.post("/new", createNewPost);
router.get("/users/:id", getUserPosts);
router.patch("/:id", editPost);
router.delete("/:id", deletePost);

module.exports = router;
