const User = require("../model/userModel")
const { hashedPasswordHandler, hashedPasswordCompare } = require("../utils/hashedPassword")
const createJsonWebToken = require("../utils/jsonWebToken")

const userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const hashedPassword = await hashedPasswordHandler(password)

        const user = new User({name, email, password: hashedPassword})
        const data = await user.save()

        res.status(201).json({message: "Register successful", data})
    } catch (error) {
        res.status(403).json({message: error.message})
    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const existingUser = await User.findOne({email})

        if(!existingUser) {
            res.status(400).json({message: "You are not registered user"})
        }

        const user = await hashedPasswordCompare(password, existingUser.password)

        if(user) {
            const token = await createJsonWebToken({id:existingUser._id}, process.env.JWT_SECRET_KEY, "8h")
            res.status(200).json({message: "Login Successful", token: token})
        } else {
            res.status(400).json({message: "Password invalid, Use the correct password"})
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = { userRegister, userLogin }