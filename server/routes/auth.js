const { Router } = require('express');
const router = Router();
const jwt = require('express-jwt')
const keys = require("../keys")
const { createUserForm, auth } = require("../controllers/createUserForm")
const logout = require("../controllers/logout")
router.post('/createForm', createUserForm)
router.post('/auth', auth)
router.post('/auth/logout', logout)
router.get('/auth/user', jwt({ secret: keys.SECRET }), (req, res, next) => {
    return res.json({ user: req.user })
})
module.exports = router