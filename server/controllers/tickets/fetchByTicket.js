const Tikets = require("../../models/tikets.model");
const Catalog = require("../../models/catalog.model");
module.exports = async (req, res) => {
    const { id } = req.params
    try {

        const amount = await Catalog.find({ _id: id }, { _id: 0, title: 0, description: 0, url_img: 0, __v: 0 })
        const listTickets = await Tikets.find({ id_catalog: id }, { __v: 0 })
            .sort({ number_tikets: 1 })
        return res.json({ listTickets })
    } catch (e) {
        return res.send(501).json({ e })
    }
}