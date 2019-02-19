const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helper = require("./helpers");

const { db } = require("../db/queries/connect");

passport.use(
  new LocalStrategy((username, password, done) => {
    db.one("SELECT * FROM users WHERE username = ${username}", {
      username: username
    })
      .then(user => {
        if (!helpers.comparePass(password, user.password.digest)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      })
      .cathc(err => {
        return done(err);
      });
  })
);
init();

module.exports = passport;
