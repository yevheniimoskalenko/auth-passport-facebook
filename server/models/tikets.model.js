const { Schema, model } = require("mongoose")

const tikets = new Schema({
    id_catalog: {
        required: true,
        type: String
    },
    id_user: {
        type: String,
        required: true
    },
    number_tikets: {
        type: Number,
        required: true
    }
})
module.exports = model('tikets', tikets)