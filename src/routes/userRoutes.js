const router = require("express").Router()

const { allUsers, userById } = require("../controllers/userController");
const authenticatedUser = require("../middleware/authMiddleware");

router.get("/", allUsers)
router.get("/:id", authenticatedUser, userById)

module.exports = router;