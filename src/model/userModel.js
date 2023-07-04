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
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    avatar: {
        type: String,
    }
}, {timestamps: true, versionKey: false})

module.exports = mongoose.model("User", userSchema)