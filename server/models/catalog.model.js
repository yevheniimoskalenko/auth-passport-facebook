const { Schema, model } = require("mongoose")


const catalog = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    url_img: {
        type: String,
        required: true
    }
})
module.exports = model('catalog', catalog)