const Catalog = require("../models/catalog.model")
module.exports.all = async (req, res) => {
    try {
        const catalogs = await Catalog.find()
        res.json(catalogs)
    } catch (e) {
        res.status(500).json(e)
    }
}
module.exports.fetchById = async (req, res) => {
    try {
        const catalog = await Catalog.find({ _id: req.params.id })
        res.json(catalog)
    } catch (e) {
        res.send(500).json(e)
    }
}