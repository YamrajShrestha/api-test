const express = require("express");
const userRouter = require("./src/modules/user/user.router");

const app = express();
const port = 3000

app.use("/user", userRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  