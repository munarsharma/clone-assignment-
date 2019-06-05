const express = require("express");
const router = express.Router();
const {
  getAllComments,
  getPostComments,
  addNewComment
} = require("../db/queries/commentsQueries");

router.get("/", getAllComments);
router.get("/posts/:id", getPostComments);
router.post("/new", addNewComment);

module.exports = router;
