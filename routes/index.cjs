const Router = require('express')
const router = new Router()
const adminRouter = require('./adminRouter.cjs')
const postRouter = require('./postRouter.cjs')
const offerPostRouter = require('./offerPostRouter.cjs')

router.use('/posts', postRouter)
router.use('/offerposts', offerPostRouter)
router.use('/admin', adminRouter)

module.exports = router
