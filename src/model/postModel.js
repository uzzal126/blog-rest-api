const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    content: {
        type: String,
        required: [true, "Content is required"]
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    image: {
        type: String
    }
}, {timestamps: true, versionKey: false})

module.exports = mongoose.model("Post", postSchema)