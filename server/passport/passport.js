const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const bcrypt = require("bcryptjs");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  "my-login-strategy",
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      User.findOne({ email: email }).then((foundedUser) => {
         // sara21 // clkasnclasncklasnclsnklcasklcnasklncjkefweyn!
                                          //sara21    //@clkancancfuwefuicackncjsycayu
        if (!User.schema.methods.checkPass(password, foundedUser.password) || !foundedUser) {
          return done(null, false, "wrong email or pass ");
        }
        return done(null, foundedUser,  'شما با موفقیت وارد سایت شدید') ;
      }).catch(err => {
          console.log('Error in Finding User in login_strategy' + err);
          return done(null, false, "ایمیل یا پسورد اشتباه است");

      });
    }
  )
);
