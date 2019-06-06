const { db } = require('./connect');

const getAllLikes = (req, res, next) => {
  db.any('SELECT * FROM likes')
    .then(likes => {
      res.status(200).json({
        status: ' success',
        likes: likes,
        message: 'Got all likes',
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
    'SELECT likes.id AS likes_id, posts.id AS liker_id, post_body, img_url, username, users.id AS users_id , COUNT(DISTINCT likes.id ) AS all_likes FROM likes JOIN users ON users.id = likes.liker_id JOIN posts ON posts.id = likes.post_id WHERE likes.post_id =$1 GROUP BY likes_id, posts.id, users.id, username ORDER BY likes.id DESC',
    [userId]
  )
    .then(likes => {
      res.status(200).json({
        status: 'success',
        likes: likes,
        message: 'got all likes by user ',
      });
    })
    .catch(err => {
      console.log('error', err);
      next(err);
    });
};

const getAllLikesBySong = (req, res, next) => {
  const postId = Number(req.params.id);

  db.any(
    'SELECT likes.id AS likes_id, posts.id AS post_id, post_body, img_url, username, users.id AS users_id FROM likes JOIN users ON users.id = likes.liker_id JOIN posts ON posts.id = likes.post_id WHERE likes.post_id =$1 GROUP BY likes_id, posts.id, users.id, username ORDER BY likes.id DESC',
    [postId]
  )
    .then(likes => {
      res.status(200).json({
        status: 'success',
        likes: likes,
        message: 'got all likes by post',
      });
    })
    .catch(err => {
      console.log('error', err);
      next(err);
    });
};

const addNewLike = (req, res, next) => {
  db.none(
    'INSERT INTO likes(liker_id post_id) VALUES(${post_id}, ${post_id})',
    req.body
  )
    .then(() => {
      res.status(200).json({
        message: 'success',
      });
    })
    .catch(err => {
      console.log('error', err);
      next(err);
    });
};

const deleteLike = (req, res, next) => {
  const favId = Number(req.params.id);

  db.none('DELETE FROM likes WHERE id= $1', [favId])
    .then(() => {
      res.status(200).json({ message: 'like deleted' });
    })

    .catch(err => {
      console.log('error', err);
    });
};

module.exports = {
  getAllLikes,
  getAllLikesByUser,
  getAllLikesBySong,
  addNewLike,
  deleteLike,
};
