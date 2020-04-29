const Tikets = require("../../models/tikets.model");
module.exports.defaultTickets = async (req, res) => {
  const {
    id
  } = req.params


  try {
    const listTickets = await Tikets.find({
        id_catalog: id
      }, {
        __v: 0
      }).limit(100)
      .sort({
        number_tikets: 1
      })
    return res.json({
      listTickets
    })
  } catch (e) {
    return res.send(501).json({
      e
    })
  }
}
module.exports.page = async (req, res) => {
  const perPage = 100;
  const {
    id,
    page = 2
  } = req.params;
  try {
    const data = await Tikets.find({
      id_catalog: id
    }).skip(perPage * page - perPage).limit(perPage).sort({
      number_tikets: 1
    })

    return res.json(data)
  } catch (e) {
    return res.status(500).json({
      e
    })
  }
}
