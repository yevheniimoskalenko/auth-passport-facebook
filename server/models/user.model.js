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
    }
})
module.exports = model('user', UserSchema)