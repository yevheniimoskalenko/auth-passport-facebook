const { Router } = require("express")
const { all, fetchById, buyTikets } = require("../controllers/catalog")
const fetchByTicket = require("../controllers/tickets/fetchByTicket")
const router = Router()

router.get('/all', all)
router.get('/fetchById/:id', fetchById)
router.post('/buytikets', buyTikets)
router.get('/tikets/:id', fetchByTicket)
module.exports = router