const { Router } = require("express")
const createCatalog = require("../controllers/createCatalog")
const roulette = require("../controllers/roulette")
const router = Router()

router.post('/create', createCatalog)
router.post('/roulette', roulette)

module.exports = router;