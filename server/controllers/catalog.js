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
    const { _id, id_catalog } = req.body.ticket
    // req.body.id

    try {
        const candidat = await User.findOne({ _id: req.body.id })

        const tiket = await Tikets.findOne({
            id_catalog: id_catalog,
            _id
        }, { __v: 0 })
        if (tiket.isBuy === false && candidat.ticket >= 1) {
            await Tikets.updateOne({ _id: tiket._id }, { $set: { isBuy: true, id_user: candidat._id } })
            await User.updateOne({ _id: candidat._id }, { $set: { ticket: candidat.ticket - 1 } })
            return res.json({ status: "Ok" })
        } else {
            return res.status(401).json({ message: "Квиток уже був придбаний раніше" })
        }

    } catch (e) {

        return res.send(501).json({ e })

    }
}
