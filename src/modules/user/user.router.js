const router = require("express").Router();

router.post("/create", (req, res, next) => {
  res.json({
    result: "To create request",
    message: "success",
    meta: null,
  });
});
router.get("/list", (req, res, next) => {
  res.json({
    result: "To list request",
    message: "success in listing",
    meta: null,
  });
});

module.exports = router;
