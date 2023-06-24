const User = require("../model/userModel")

const allUsersController = async (_req, res) => {
    try {
        const data = await User.find().select({password:0, __v:0})
        res.status(200).json(data)
    } catch (error) {
        res.status(204).json({message: error.message})
    }
}

const userByIdController = async (req, res) => {
    try {
        const userId = req.params.id
        const data = await User.findById(userId).select({password:0, __v:0}).populate("posts")
        res.status(200).json(data)
    } catch (error) {
        res.status(204).json({message: error.message})
    }
}

module.exports = { allUsersController, userByIdController }