const User = require("../model/userModel")

const allUsers = async (_req, res) => {
    try {
        const data = await User.find().select({password:0})
        res.status(200).json(data)
    } catch (error) {
        res.status(204).json({message: error.message})
    }
}

const userById = async (req, res) => {
    try {
        const {id} = req.params
        const data = await User.findById(id).select({password:0})
        res.status(200).json(data)
    } catch (error) {
        res.status(204).json({message: error.message})
    }
}

module.exports = { allUsers, userById }