const { Router } = require("express");
const { load, mygames, editpass, edit } = require("../controllers/user")
const router = Router();

router.get('/load/:id', load)
router.get('/games/:id', mygames)
router.put('/editpass/', editpass)
router.put('/edit', edit)

module.exports = router