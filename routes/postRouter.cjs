const Router = require('express')
const router = new Router()
const PostController = require('../controllers/postController.cjs')

router.post('/', PostController.create)
router.delete('/delete/:id', PostController.delete)
router.get('/all', PostController.getAll)
router.get('/:id', PostController.getOne)
router.put('/change/:id', PostController.change)
module.exports = router
