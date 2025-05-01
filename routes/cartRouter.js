const Router = require("express");
const router = new Router();
const CartController = require('../Controllers/CartController')

router.post('/add', CartController.add)


module.exports = router