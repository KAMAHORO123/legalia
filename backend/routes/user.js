const { Router } = require("express");

const userController = require("../controllers/userController");

const router = Router();

router.get("/all", userController.getAllUsers);
router.post("/register", userController.createUser);
router.post("/login", userController.login);

module.exports = router;
