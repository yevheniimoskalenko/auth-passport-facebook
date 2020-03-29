const User = require("../models/user.model")
const bcrypt = require('bcrypt-nodejs')
module.exports.createUserForm = async (req, res) => {
    const { email, password, name, adress, phoneNumber } = req.body
    const candidat = await User.findOne({ email })
    if (candidat) {
        res.status(409).json({ message: "Користувач з електроною поштою, уже зареєстрований був раніше." })
    } else {

        const salt = bcrypt.genSaltSync(10)

        const user = new User({
            email,
            password: bcrypt.hashSync(password, salt),
            name,
            adress,
            phoneNumber
        })
        await user.save()
        return res.status(201).json(user)
    }
}