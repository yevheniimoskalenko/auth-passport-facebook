const { model, Schema } = require("mongoose")


const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fb_id: {
        type: Number,
    },
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    admin: {
        type: Number,
        required: true,
        default: 0
    },
    ticket: {
        type: Number,
        required: true,
        default: 0
    }
})
module.exports = model('user', UserSchema)