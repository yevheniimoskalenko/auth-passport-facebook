const { Router } = require("express")
const { all, fetchById, buyTikets, fetchByTicket } = require("../controllers/catalog")
const router = Router()

router.get('/all', all)
router.get('/fetchById/:id', fetchById)
router.post('/buytikets', buyTikets)
router.get('/tikets/:id', fetchByTicket)
module.exports = router