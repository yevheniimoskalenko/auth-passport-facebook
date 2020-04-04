const Catalog = require("../models/catalog.model")
module.exports = async (req, res) => {
    const { title, description, amount, img } = req.body
    const catalog = new Catalog({
        title,
        description,
        amount,
        url_img: img
    })
    await catalog.save();
    return res.json({
        status: "success"
    })
}