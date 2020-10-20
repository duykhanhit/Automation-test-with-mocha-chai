const express = require('express');
const {
  getUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser
} = require('../controllers/userControllers');

const router = express.Router();

router.route('/user')
  .get(getUsers)
  .post(addUser)

router.route('/user/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser)

module.exports = router;