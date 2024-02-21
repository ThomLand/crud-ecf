const { Router } = require("express");
const userController = require("../controllers/user-controller");

const router = Router();

//users routes
router.get("/", userController.getUsers);
router.post("/", userController.createUsers);
router.get("/one/:id", userController.getOneUser);
router.put("/one/:id", userController.updateUser);
router.delete("/one/:id", userController.deleteUser);
module.exports = router;
