const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  createNewUser,
  editUser,
  deleteUser,
} = require('../db/queries/usersQueries');
const { loginRequired } = require('../auth/helpers');

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', createNewUser);
router.patch('/:id', editUser);
router.delete('/:id', deleteUser);
router.post('/login', passport.authenticate('local', {}), logUserIn);
router.get('/isLoggedIn', isLoggedIn);
router.post('/logout', loginRequired, logUserOut);

module.exports = router;
