const express = require("express")
const mongose = require('mongoose');
const passport = require("passport")
// const FacebookSrategy = require("passport-facebook")
const passportStaregy = require("./middleware/passport-strategy")
const authLogin = require("./routes/auth")
const config = require("./keys")

const app = express()

mongose.connect("mongodb+srv://yevhenii:was123456789was@cluster0-vrxpp.mongodb.net/test", {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log(`connect has started..`))

app.use(express.json())
app.use(passport.initialize())



app.get('/auth/facebook', passport.authenticate('facebook', { authType: 'reauthenticate', scope: ['user_friends', 'manage_pages'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/',
    successRedirect: '/',
    failureFlash: true
}));

app.use(express.urlencoded({ extended: false }))
app.use('/api/', authLogin)
module.exports = app