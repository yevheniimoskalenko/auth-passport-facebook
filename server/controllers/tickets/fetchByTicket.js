const Tikets = require("../../models/tikets.model");
const Catalog = require("../../models/catalog.model");
module.exports = async (req, res) => {
    const { id } = req.params
    try {
        const listTickets = await Tikets.find({ id_catalog: id }, { __v: 0 })
            .sort({ number_tikets: 1 })
        return res.json({ listTickets })
    } catch (e) {
        return res.send(501).json({ e })
    }
}