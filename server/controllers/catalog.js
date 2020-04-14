const Catalog = require("../models/catalog.model");
const Tikets = require("../models/tikets.model");
const User = require("../models/user.model")
module.exports.all = async (req, res) => {
    try {
        const catalogs = await Catalog.find()
        res.json(catalogs)
    } catch (e) {
        res.status(500).json(e)
    }
}
module.exports.fetchById = async (req, res) => {
    const { id } = req.params
    try {
        const catalog = await Catalog.find({ _id: id })
        res.json(catalog)
    } catch (e) {
        res.send(500).json(e)
    }
}
module.exports.buyTikets = async (req, res) => {
    const { tikets, id_catalog, id } = req.body

    try {
        const candidat = await User.findOne({ _id: id })

        const tiket = await Tikets.findOne({
            id_catalog: id_catalog,
            number_tikets: tikets
        }, { __v: 0 }).sort({ number_tikets: 1 })
        if (!tiket && candidat.ticket >= tikets.length) {
            await tikets.forEach((item) => {
                const tiketbuy = new Tikets({
                    id_catalog,
                    id_user: id,
                    number_tikets: item
                })
                tiketbuy.save()
            });
            await User.updateOne({ _id: id }, { $set: { ticket: candidat.ticket - tikets.length } })
            return res.json({ "status": "success" })
        } else {

            return res.status(401).json({ "status": "tiсket busy" })
        }

    } catch (e) {

        return res.send(501).json({ e })
    }
}
module.exports.fetchByTicket = async (req, res) => {
    const { id } = req.params
    try {
        const listTickets = await Tikets.find({ id_catalog: id }, { _id: 0, id_catalog: 0, id_user: 0, __v: 0 })
            .sort({ number_tikets: 1 })
        return res.json({ listTickets })
    } catch (e) {
        return res.send(501).json({ e })
    }
}