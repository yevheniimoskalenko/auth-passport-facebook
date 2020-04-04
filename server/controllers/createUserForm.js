const User = require("../models/user.model")
const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs')
const keys = require("../keys")
const salt = bcrypt.genSaltSync(10)
module.exports.createUserForm = async (req, res) => {
    const { email, password, name, adress, phoneNumber } = req.body
    const candidat = await User.findOne({ email })
    if (candidat) {
        res.status(409).json({ message: "Користувач з електроною поштою, уже зареєстрований був раніше." })
    } else {
        const user = new User({
            email,
            password: bcrypt.hashSync(password, salt),
            name,
            adress,
            phoneNumber,
            admin: 0
        })
        await user.save()
        return res.status(201).json(user)
    }
}
module.exports.auth = async (req, res) => {
    const { email, password } = req.body
    const candidat = await User.findOne({ email })
    if (candidat) {
        bcrypt.compare(password, candidat.password, function (err, result) {
            if (result) {
                const token = jsonwebtoken.sign({
                    email,
                    id: candidat._id,
                    admin: candidat.admin
                }, keys.SECRET, { expiresIn: 60 * 60 * 1000 })
                return res.json({ token })
            } else {
                return res.status(401).json({ message: "Електрона пошта ведена не вірно або пароль." })
            }
        });
    } else {
        return res.status(401).json({ message: "Електрона пошта ведена не вірно або пароль." })
    }
}
