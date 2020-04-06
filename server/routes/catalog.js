const { Router } = require("express")
const { all } = require("../controllers/catalog")
const router = Router()

router.get('/all', all)
module.exports = router