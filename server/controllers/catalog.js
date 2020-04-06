const Catalog = require("../models/catalog.model")
module.exports.all = async (req, res) => {
    try {
        const catalogs = await Catalog.find()
        res.json(catalogs)
    } catch (e) {
        res.status(500).json(e)
    }
}