const router = require("express").Router()

const { allUsersController, userByIdController } = require("../controllers/userController");
const authenticatedUser = require("../middleware/authMiddleware");

router.get("/", allUsersController)
router.get("/:id", authenticatedUser, userByIdController)

module.exports = router;