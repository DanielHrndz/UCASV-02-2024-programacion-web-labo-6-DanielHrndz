const { addUserController, showForm, showAllUsers } = require('../controllers/user.controller');

const router = require('express').Router();
router.get('/', showForm);
router.get('/allUsers', showAllUsers);
router.post('/home', addUserController)

module.exports = router;