const router = require("express").Router()
const { userRegisterController, userLoginController } = require("../controllers/authController");

router.post("/register", userRegisterController)
router.post("/login", userLoginController)

module.exports = router;