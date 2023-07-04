const User = require("../model/userModel")
const cloudinary = require("../utils/cloudinary")

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
const updateUser = async (req, res) => {
    try {
        const {id} = req.params
        const {name, address, phone} = req.body
        const avatar = req.files.avatar

        const result = await cloudinary.uploader.upload(avatar.tempFilePath, {
            folder: "posts"
        })
        const updatedUser = await User.findByIdAndUpdate(id, {name, address, phone, avatar: result.secure_url}, { new: true })
        res.status(200).json({success: true, message: "User successfully updated", updatedUser})
    } catch (error) {
        res.status(204).json({message: error.message})
    }
}

module.exports = { allUsers, userById, updateUser }