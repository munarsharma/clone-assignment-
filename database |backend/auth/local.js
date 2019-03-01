const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers");

const { db } = require("../db/queries/connect");

passport.use(
  new LocalStrategy((username, password, done) => {
    db.one("SELECT * FROM users WHERE username = ${username}", {
      username: username
    })
      .then(user => {
        if (!helpers.comparePass(password, user.password_digest)) {
          return done(null, false);
        } else {
          return done(null, {
            username: user.username,
            id: user.id,
            img_url: user.img_url
          });
        }
      })
      .catch(err => {
        return done(err);
      });
  })
);
init();

module.exports = passport;
