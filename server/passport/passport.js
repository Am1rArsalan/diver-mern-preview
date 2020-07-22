
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./../models/User');
const bcrypt = require('bcryptjs');

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(
    'register',
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
            session: false,
        },
        (req, email, password, done) => {

            try {

                User.findOne({ email: req.body.eamil })
                    .then((user) => {
                        if (user != null) {
                            console.log(' email already taken');
                            return done(null, false, {
                                message: ' email already exists',
                            });
                        }
                        bcrypt.hash(password, BCRYPT_SALT_ROUNDS)
                              .then((hashedPassword) => {

                                    const newUser = new User({

                                        password: hashedPassword,
                                        email: email
                                    });

                                console.log(`new user test ==> [ amir ]`, newUser);

                                newUser.save()
                                    .then(savedUser => {
                                        return done(null, savedUser);

                                    })
                                    .catch(error => {
                                        console.log(` [an error ouccered in register user ] `, error)
                                        return done(null, false, {
                                            message: "email or password is not valid "
                                        });
                                    });
                            });
                    });
            } catch (err) {
                return done(err);
            }
        },
    ),
);

passport.use('my-register-startegy', new LocalStrategy({

    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},
    (req, email, password, done) => {

        User.findOne({ email: email }).then((user) => {
            if (user) {
                return done(null, false, req.flash('message', 'چنین کاربری قبلا در سایت ثبت نام کرده است'));
            }
        }).catch((err) => {
            console.log(' Error in finding user in the register strategy' + err);
        });
        const newUser = new User({
            name: req.body.name, email, password
        });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt).then((hash) => {
                newUser.password = hash;
                newUser.save().then((saveduser) => {

                    return done(null,
                        saveduser,
                        req.flash('success_msg', 'ثبت نام شما با موفقیت انجام شد'));


                }).catch((err) => {
                    if (err) return done(err, false, req.flash('message', 'ثبت نام با موفقیت انجام نشد لطفا دوباره سعی کنید'));
                    done(null, newUser);
                    console.log('Error in saving user to database');
                });
            }).catch((err) => {
                console.log(`Error in hashing password  in register strategy  ${err}`);
                return done(err, false, req.flash('message', 'ثبت نام با موفقیت انجام نشد لطفا دوباره سعی کنید'));
            });
        });
    }));



passport.use('my-login-strategy', new LocalStrategy(
    {
        usernameField: 'email',
        passReqToCallback: true
    },
    (req, email, password, done) => {

        User.findOne({ email: email }).then(user => {

            if (!User.schema.methods.checkPass(password, user.password) || !user) {
                // console.log('pass is wrong');
                return done(null, false, "wrong email or pass ");
            }
            return done(null, user,  'شما با موفقیت وارد سایت شدید') ;
        }).catch(err => {

            console.log('Error in Finding User in login_strategy' + err);
            return done(null, false, "ایمیل یا پسورد اشتباه است");

        });
    }

));






