const express = require("express");
const router = express.Router();
const { getAllPosts } = require("../db/queries/postsQueries");

router.get("/", getAllPosts);
router.get("/:id", getSingleUser);
router.post("/new", createNewUser);
// router.patch('/:id', editUser);
// router.delete('/:id', deleteUser);

module.exports = router;
