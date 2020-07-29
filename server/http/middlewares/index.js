//middlewares
const passport = require("passport");

function authMiddleWare(req, res, next) {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err || !user)
      return res.status(401).json({
        data: info.message || "اجازه دسترسی ندارید",
        status: false ,
      });

    req.user = user;

    next();
  })(req, res, next);
}

module.exports = { authMiddleWare } ;
