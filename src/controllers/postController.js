const Post = require("../model/postModel")
const User = require("../model/userModel")

// get all posts
const getAllPosts = async (_req, res, _next) => {
    try {
        const data = await Post.find().populate("user").select("-__v")
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

// create new post
const addPost = async (req, res, _next) => {
    try {
        const userId = req.user.id
        const { title, content } = req.body
        const newPost = new Post({title, content, user:userId})
        const post = await newPost.save()
        
        await User.updateOne({_id:userId}, {
            $push: {
                posts:post._id
            }
        })

        res.status(201).json(post)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = { getAllPosts, addPost }