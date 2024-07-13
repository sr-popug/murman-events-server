const Router = require('express')
const router = new Router()
const OfferPostController = require('../controllers/offerPostController.cjs')

router.post('/', OfferPostController.create)
router.delete('/delete/:id', OfferPostController.delete)
router.get('/all', OfferPostController.getAll)
router.get('/:id', OfferPostController.getOne)
router.patch('/change/:id', OfferPostController.change)

module.exports = router
