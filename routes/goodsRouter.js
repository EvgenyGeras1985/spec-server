const Router = require("express");
const router = new Router();
const goodController = require('../Controllers/GoodController.js');

router.post('/add', goodController.addGood)
router.get('/', goodController.GetAllGood)

module.exports = router