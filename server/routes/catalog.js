const {
  Router
} = require("express")
const {
  all,
  fetchById,
  buyTikets
} = require("../controllers/catalog")
const {
  defaultTickets,
  page
} = require("../controllers/tickets/fetchByTicket")
const router = Router()

router.get('/all', all)
router.get('/fetchById/:id', fetchById)
router.post('/buytikets', buyTikets)
router.get('/tickets/page/:id/:page', page)
router.get('/tikets/:id', defaultTickets)
module.exports = router
