const Router = require('express')
const router = new Router()
const AdminController = require('../controllers/adminController.cjs')

router.post('/', AdminController.auth)
router.get('/auth', AdminController.check)

module.exports = router
