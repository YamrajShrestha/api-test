const express = require("express");
const router = require("./router.config");

const app = express();
// before mounting route, get parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(router);

app.use((req, res, next) => {
  next({ code: 404, message: "not found" });
});
app.use((error, req, res, next) => {
  const code = error.code || 500;
  const msg = error.message || "server error";
  const data = error.data || null;
  res.status(code).json({
    result: data,
    message: msg,
    meta: null,
  });
});

module.exports = app;
