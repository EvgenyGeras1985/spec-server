const Router = require("express");
const router = new Router();
const goodController = require('../Controllers/GoodController.js');

router.post('/add', goodController.addGood)

module.exports = router