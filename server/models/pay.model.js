const { Schema, model } = require("mongoose")

const payResult = new Schema({
    id_user: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    tikets: {
        type: Number,
        required: true
    }
})
module.exports = model('pay', payResult)