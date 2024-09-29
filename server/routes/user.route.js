const express = require("express");
const userRouter = require("../controller/user.controller");
const router = express.Router();

router.use("/user", userRouter);

module.exports = router;
