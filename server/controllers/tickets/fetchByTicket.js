const Tikets = require("../../models/tikets.model");
module.exports = async (req, res) => {
    const { id } = req.params
    try {
        const listTickets = await Tikets.find({ id_catalog: id }, { __v: 0 }).limit(100)
            .sort({ number_tikets: 1 })
        return res.json({ listTickets })
    } catch (e) {
        return res.send(501).json({ e })
    }
}