const User = require("../models/user.model")
module.exports.createUserForm = async (req, res) => {
    const { email, password } = req.body
    const candidat = await User.findOne({ email })
    if (candidat) {
        return res.status(409).json({ message: "Такой email уже зарегистрированый" })
    } else {
        const user = new User({
            email,
            password
        })
        await user.save()
        return res.status(201).json(user)
    }
}