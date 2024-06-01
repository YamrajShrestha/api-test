const router = require("express").Router();
const userCtrl = require("./user.controller");

router.post("/create", userCtrl.createUser);
router.get("/list", userCtrl.listUser);

module.exports = router;
