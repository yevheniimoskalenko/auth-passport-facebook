const { Router } = require('express');
const router = Router();
const { createUserForm } = require("../controllers/createUserForm")

router.post('/login', createUserForm)
module.exports = router