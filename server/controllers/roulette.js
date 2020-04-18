const Winner = require('../models/winner.model')
const Tickets = require('../models/tikets.model')
const Catalog = require("../models/catalog.model")
const User = require("../models/user.model")
module.exports = async (req, res) => {
    const { id, count } = req.body
    try {
        const random = Math.floor(Math.random() * Math.floor(count))
        const ticket = await Tickets.findOne({ id_catalog: id, number_tikets: random })
        const winner = new Winner({
            id_catalog: ticket.id_catalog,
            id_user: ticket.id_user,
            numberWinner: ticket.number_tikets
        })
        await winner.save();
        const userWinner = await User.findOne({ _id: ticket.id_user }, { admin: 0, ticket: 0, _id: 0, email: 0, password: 0, address: 0, phoneNumber: 0, city: 0, date: 0, __v: 0 })
        await Catalog.updateOne({ _id: ticket.id_catalog }, { $set: { isDisabled: true } })
        const data = { name: userWinner.name, numberWinner: winner.numberWinner, idWinner: winner.id_user }
        return res.json(data)
    } catch (e) {
        return res.status(500).json(e)
    }

}