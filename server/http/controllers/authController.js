const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("../../config") ;

async function login(req, res, next) {
  passport.authenticate(
    "my-login-strategy",
    { session: false },
    (err, user) => {
      if (err) {
        return res.status(500).json({
          data: err.message,
          status: "error",
        });
      }

      if (!user) {
        return res.status(404).json({
          data: "چنین کاربری وجود ندارد",
          status: "error",
        });
      }

      req.login(user, { session: false }, (err) => {
        if (err) {
          return res.status(404).json({
            data: err.message,
            status: "error",
          });
        }
        // create token
        // with seconds
        const token = jwt.sign({ id: user.id }, config.jwt.secret_key, {
          expiresIn: 60 * 60 * 1,
        });
        return res.json({
          data: {
            token,
          },
          status: true,
        });
      });
    }
  )(req, res);
}

async function logout(req, res, next) {
  res.json({
    status: true,
  });
}
module.exports = { logout, login };
