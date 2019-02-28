const passport = require("passport");
const { db } = require("../db/queries/connect");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, { username: user.username, id: user.id, imgurl: user.img_url });
  });

  passport.deserializeUser((user, done) => {
    db.one("SELECT * FROM users WHERE username = ${username}", {
      username: user.username
    })
      .then(user => {
        done(null, {
          username: user.username,
          id: user.id,
          imgurl: user.img_url
        });
      })
      .catch(err => {
        done(err, null);
      });
  });
};
