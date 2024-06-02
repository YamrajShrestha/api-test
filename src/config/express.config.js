const express = require("express");
const userRouter = require("../modules/user/user.router");

const app = express();

app.use("/user", userRouter);

module.exports = app;
