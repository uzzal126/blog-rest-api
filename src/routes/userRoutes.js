const router = require("express").Router()

const { allUsers, userById, updateUser } = require("../controllers/userController");
const authenticatedUser = require("../middleware/authMiddleware");

router.get("/", allUsers)
router.get("/:id", authenticatedUser, userById)
router.put("/:id", authenticatedUser, updateUser)

module.exports = router;