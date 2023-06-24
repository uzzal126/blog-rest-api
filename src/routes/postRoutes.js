const router = require("express").Router()

const { getAllPosts, addPost } = require("../controllers/postController")
const authenticated = require("../middleware/authMiddleware")


router.get("/", getAllPosts)
router.post("/", authenticated, addPost)

module.exports = router