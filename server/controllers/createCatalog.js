const Catalog = require("../models/catalog.model")
const Tickets = require("../models/tikets.model")
const list = require("./module/ticket")
module.exports = async (req, res) => {
    const { title, description, amount, img } = req.body
    const catalog = new Catalog({
        title,
        description,
        amount,
        url_img: img
    })
    await catalog.save();
    await Tickets.insertMany(list(catalog.amount, catalog._id))
    return res.json({
        status: "success"
    })
}// await Tickets.insertMany(list(catalog.amount, catalog._id))