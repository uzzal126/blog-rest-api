const router = require("express").Router()

const { getAllPosts, addPost, getPostById, updatePost, deletePost } = require("../controllers/postController")
const authenticated = require("../middleware/authMiddleware")


router.get("/", getAllPosts)
router.get("/:id", getPostById)
router.put("/:id", authenticated, updatePost)
router.delete("/:id", authenticated, deletePost)
router.post("/", authenticated, addPost)

module.exports = router