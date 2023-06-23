const router = require("express").Router()

const { allUsersController, userByIdController } = require("../controllers/userController");
const authenticatedUser = require("../middlewares/authMiddleware");

router.get("/users", allUsersController)
router.get("/users/:id", authenticatedUser, userByIdController)

module.exports = router;