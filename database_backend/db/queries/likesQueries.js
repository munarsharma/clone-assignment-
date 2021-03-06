const { db } = require("./connect");

const getAllLikes = (req, res, next) => {
  db.any("SELECT * FROM likes")
    .then(likes => {
      res.status(200).json({
        status: " success",
        likes: likes,
        message: "Got all likes"
      });
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};

const getAllLikesByUser = (req, res, next) => {
  const userId = req.params.id;

  db.any(
    "SELECT DISTINCT likes.id AS likes_id, posts.id AS id, post_body, users.img_url AS user_img, username, posts.img_url AS img_url, posts.user_id AS poster_id, COUNT(DISTINCT likes.id ) AS all_likes FROM likes JOIN users ON users.id = likes.liker_id JOIN posts ON posts.id = likes.post_id WHERE likes.liker_id = $1 GROUP BY posts.id, users.id,likes.id ORDER BY likes.id DESC",
    [userId]
  )
    .then(likes => {
      res.status(200).json({
        status: "success",
        likes: likes,
        message: "got all likes by user "
      });
    })
    .catch(err => {
      console.log("error", err);
      next(err);
    });
};

const getAllLikesByPost = (req, res, next) => {
  const postId = Number(req.params.id);

  db.any(
    "SELECT likes.id AS likes_id, posts.id AS post_id, post_body, users.img_url, username, users.id AS users_id FROM likes JOIN users ON users.id = likes.liker_id JOIN posts ON posts.id = likes.post_id WHERE likes.post_id =$1 GROUP BY likes_id, posts.id, users.id, username ORDER BY likes.id DESC",
    [postId]
  )
    .then(likes => {
      res.status(200).json({
        status: "success",
        likes: likes,
        message: "got all likes by post"
      });
    })
    .catch(err => {
      console.log("error", err);
      next(err);
    });
};

const addNewLike = (req, res, next) => {
  db.none(
    "INSERT INTO likes(liker_id, post_id) VALUES(${user_id}, ${post_id})",
    req.body
  )
    .then(() => {
      res.status(200).json({
        message: "success"
      });
    })
    .catch(err => {
      console.log("error", err);
      next(err);
    });
};

const deleteLike = (req, res, next) => {
  const favId = Number(req.params.id);

  db.none("DELETE FROM likes WHERE id= $1", [favId])
    .then(() => {
      res.status(200).json({ message: "like deleted" });
    })

    .catch(err => {
      console.log("error", err);
    });
};

module.exports = {
  getAllLikes,
  getAllLikesByUser,
  getAllLikesByPost,
  addNewLike,
  deleteLike
};
