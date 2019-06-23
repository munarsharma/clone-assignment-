var express = require("express");

var router = express.Router();

const {
  getAllLikes,
  addNewLike,
  getAllLikesByUser,
  getAllLikesByPost,
  deleteLike
} = require("../db/queries/likesQueries.js");

router.get("/", getAllLikes);
router.post("/new", addNewLike);
router.get("/users/:id", getAllLikesByUser);
router.get("/post/:id", getAllLikesByPost);
router.delete("/:id", deleteLike);

module.exports = router;
