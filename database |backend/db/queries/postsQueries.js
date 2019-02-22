const { db } = require("./connect");

const getAllPosts = (req, res, next) => {
  db.any("SELECT * FROM posts")
    .then(post => {
      res.status(200).json({
        status: "success",
        post: post,
        message: "Got All posts"
      });
    })
    .catch(err => {
      console.log("error", err);
      next(err);
    });
};

const getSingleUser = (req, res, next) => {
  const user_id = parseInt(req.params.id);

  db.one("SELECT * FROM users WHERE id=$1", [user_id])
    .then(user => {
      res.status(200).json({
        status: "success",
        user: user,
        message: "got single user"
      });
    })
    .catch(err => {
      console.log("error", err);
      next(err);
    });
};

const createNewPost = (req, res, next) => {
  db.none(
    "INSERT INTO posts( postType, post_body, email) VALUES( ${username}, ${password}, ${email})",
    { username: req.body.username, password: hash, email: req.body.email }
  )
    .then(() => {
      res.status(200).json({
        message: "success"
      });
    })
    .catch(err => {
      console.log("error", err);
      return next(err);
    });
};

module.exports = { getAllPosts };
