const { Router } = require("express")
const { all, fetchById } = require("../controllers/catalog")
const router = Router()

router.get('/all', all)
router.get('/fetchById/:id', fetchById)
module.exports = router