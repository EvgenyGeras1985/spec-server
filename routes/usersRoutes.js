const Router = require("express");
const router = new Router();
const userController = require("../Controllers/UserController.js");

router.post('/registration', userController.registration)
router.post('/login', userController.userLog)
router.post('/auth', userController.userAuth)

module.exports = router
