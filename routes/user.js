const {Router} = require('express');
const UserController = require('../controllers/user');

const router = Router(); 

router.get("/login", UserController.login);
router.get("/register", UserController.register);

module.exports = router;