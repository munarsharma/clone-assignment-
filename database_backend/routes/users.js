const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  createNewUser,
  editUser,
  deleteUser,
  logUserOut,
  logUserIn,
  isLoggedIn
} = require("../db/queries/usersQueries");

const { loginRequired } = require("../auth/helpers");
const passport = require("../auth/local");

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.post("/new", createNewUser);
router.patch("/:id", editUser);
router.delete("/:id", deleteUser);
router.post("/login", passport.authenticate("local", {}), logUserIn);
router.post("/logout", loginRequired, logUserOut);
router.post("/isLoggedIn", isLoggedIn);

module.exports = router;
