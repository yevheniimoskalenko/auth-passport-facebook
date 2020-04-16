const bcrypt = require('bcrypt-nodejs')
const salt = bcrypt.genSaltSync(10)
const clear = require("./module/cleanObj")
const User = require("../models/user.model")
const Tickets = require("../models/tikets.model")
const Catalog = require("../models/catalog.model")


module.exports.load = async (req, res) => {
    try {
        const candidat = await User.findOne({ _id: req.params.id }, { admin: 0, _id: 0, __v: 0 })
        return res.json(candidat)
    } catch (e) {
        res.status(500).json(e)
    }
}
module.exports.mygames = async (req, res) => {
    try {
        const games = await Tickets.find({ id_user: req.params.id }, { _id: 0, __v: 0, id_user: 0 }).sort({ number_tikets: 1 })
        return res.json(games)
    } catch (e) {
        res.status(500).json(e)
    }
}
module.exports.editpass = async (req, res) => {
    const { password, newpassword, id_user } = req.body
    try {
        await User.findOne({ _id: id_user }).exec((err, user) => {
            bcrypt.compare(password, user.password, async function (err, result) {
                if (result) {
                    await User.updateOne({ _id: user._id }, { $set: { password: bcrypt.hashSync(newpassword, salt) } })
                    return res.json({ message: "Пароль був змінений" })
                } else {
                    return res.status(401).json({ message: "Пароль не збігається" })
                }
            })
        })
    } catch (e) {
        return res.status(500).json(e)
    }
}
module.exports.edit = async (req, res) => {
    const { id_user, ...obj } = req.body

    try {
        await User.updateMany({ _id: id_user }, { $set: clear(obj) })
        return res.json({ message: "дані були змінені" })
    } catch (e) {
        return res.status(500).json({ message: "Дані не були змінені" })
    }
}