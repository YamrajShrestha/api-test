class UserController {
    
  createUser = (req, res, next) => {
    res.json({
      result: "To create using controller",
      message: "success on controller",
      meta: null,
    });
  };
  listUser = (req, res, next) => {
    res.json({
      result: "To list using controller",
      message: "success on listing using controller",
      meta: null,
    });
  };
}

const userCtrl = new UserController();
module.exports = userCtrl;
