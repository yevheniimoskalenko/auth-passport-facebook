const { Router } = require('express');
const router = Router();
const { createUserForm, auth } = require("../controllers/createUserForm")

router.post('/createForm', createUserForm)
router.post('/auth', auth)

module.exports = router