const { Router } = require("express")
const router = Router()
const { create, result } = require("../controllers/pay.control")
router.post("/create", create)
router.post('/result', result)


module.exports = router