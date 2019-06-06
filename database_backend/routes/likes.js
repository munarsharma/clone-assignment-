var express = require("express");

var router = express.Router();
const {
  getAlllikes,
  addNewlike,
  getAlllikesByUser,
  getAlllikesByPost,
  deletelike
} = require("../db/queries/favoritesQueries.js");

router.get("/", getAlllikes);
router.post("/new", addNewlike);
router.get("/users/:id", getAlllikesByUser);
router.get("/post/:id", getAlllikesByPost);
router.delete("/:id", deletelike);

module.exports = router;
