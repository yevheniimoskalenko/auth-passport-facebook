const express = require("express")
const mongose = require('mongoose');
const authLogin = require("./routes/auth")
const pay = require("./routes/pay.routes")
const app = express()
const admin = require("./routes/admin")
mongose.connect("mongodb+srv://yevhenii:was123456789was@cluster0-vrxpp.mongodb.net/test", {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log(`connect has started..`))

app.use(express.json())

app.use(express.urlencoded({ extended: false }))
app.use('/api/', authLogin)
app.use('/api/pay', pay)
app.use('/admin', admin)
module.exports = app