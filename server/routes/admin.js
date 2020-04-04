const { Router } = require("express")
const createCatalog = require("../controllers/createCatalog")
const router = Router()

router.post('/create', createCatalog)

module.exports = router;