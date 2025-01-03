const Router = require("express");
const router = new Router();
const usersRoutes = require('./usersRoutes')
const goodsRouter = require('./goodsRouter')

router.use('/users', usersRoutes)
router.use('/goods', goodsRouter)

module.exports = router;