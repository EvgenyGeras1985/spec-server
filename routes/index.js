const Router = require("express");
const router = new Router();
const usersRoutes = require('./usersRoutes')
const goodsRouter = require('./goodsRouter')
const cartRouter = require('./cartRouter')

router.use('/users', usersRoutes)
router.use('/goods', goodsRouter)
router.use('/cart', cartRouter)

module.exports = router;