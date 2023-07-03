const Post = require("../model/postModel")

// get all posts
const getAllPosts = async (_req, res, _next) => {
    try {
        const data = await Post.find().sort({ createdAt: -1 })
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
        res.status(201).json(post)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

// get post by id
const getPostById = async (req, res, _next) => {
    try {
        const {id} = req.params
        const data = await Post.findById(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

// get post by id
const updatePost = async (req, res, _next) => {
    try {
        const {id} = req.params
        const { title, content } = req.body
        const updateData = await Post.findByIdAndUpdate(id, {title, content}, { new: true })
        res.status(200).json(updateData)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

// delete post by id
const deletePost = async (req, res, _next) => {
    try {
        const {id} = req.params
        const deletedData = await Post.findByIdAndDelete(id)
        res.status(200).json(deletedData)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = { getAllPosts, addPost, getPostById, updatePost, deletePost }