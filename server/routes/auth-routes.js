const { Router } = require("express");
const authController = require("../controllers/auth-controllers");

const router = Router();

//users routes
router.post("/", authController.LoginUser);
module.exports = router;
