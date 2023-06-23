const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email is already registered"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
})

module.exports = mongoose.model("User", userSchema)