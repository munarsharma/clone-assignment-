const { db } = require('./connect');

const getAllPosts = (req, res, next) => {
  // req.body.user_id = parseInt(req.params.id);

  db.any(
    'SELECT DISTINCT users.id AS user_id, users.img_url AS user_img, posts.id AS id, username, posttype, post_body, posts.img_url AS img_url, COUNT(DISTINCT likes.id ) AS all_likes, array_agg(likes.id) AS like_id FROM posts RIGHT JOIN users ON posts.user_id = users.id LEFT JOIN likes ON likes.post_id = posts.id GROUP BY users.id, posts.id ORDER BY posts.id DESC '
  )
    .then(posts => {
      res.status(200).json({
        status: 'success',
        posts: posts,
        message: 'Got All posts',
      });
    })
    .catch(err => {
      console.log('error', err);
      next(err);
    });
};

const getSinglePost = (req, res, next) => {
  const post_id = parseInt(req.params.id);

  db.one('SELECT * FROM posts WHERE id=$1', [post_id])
    .then(post => {
      res.status(200).json({
        status: 'success',
        post: post,
        message: 'got single post',
      });
    })
    .catch(err => {
      console.log('error', err);
      // next(err);
    });
};

const getUserPosts = (req, res, next) => {
  let user_id = parseInt(req.params.id);

  db.any(
    'SELECT users.id AS user_id, users.img_url AS user_img, posts.id AS id, username, posttype, post_body, posts.img_url AS img_url, COUNT(DISTINCT likes.id) AS all_likes,  array_agg(likes.id) AS like_id FROM posts RIGHT JOIN users ON posts.user_id = users.id LEFT JOIN likes ON posts.id = likes.post_id WHERE posts.user_id=$1 GROUP BY users.id, posts.id ORDER BY posts.id DESC',
    [user_id]
  )
    .then(posts => {
      res.status(200).json({
        status: 'success',
        posts: posts,
        message: 'got user posts',
      });
    })
    .catch(err => {
      console.log('USER POST ERR', err);
      next(err);
    });
};

// for text & link posts have: posttype, user_id, and post_body
// for photo post: posttype, user_id, postbody and img_url

const createNewPost = (req, res, next) => {
  let statement = 'INSERT INTO posts';

  if (req.body.postType === 'text') {
    statement = statement.concat(
      '(postType, post_body, user_id) VALUES( ${postType}, ${post_body}, ${user_id})'
    );
  } else if (req.body.postType === 'img') {
    statement = statement.concat(
      '(postType, post_body, user_id, img_url) VALUES( ${postType}, ${post_body}, ${user_id}, ${img_url})'
    );
  }

  db.none(`${statement}`, { ...req.body, user_id: req.user.id })
    .then(() => {
      res.status(200).json({
        message: 'success',
      });
    })
    .catch(err => {
      console.log('error', err);
      // return next(err);
    });
};

const editPost = (req, res, next) => {
  // const userid = parseInt(req.params.id);
  db.none(
    'UPDATE posts SET postType= ${postType}, post_body = ${post_body}, img_url= ${img_url}  WHERE id =${id}',

    {
      id: Number(req.params.id),
      postType: req.body.postType,
      post_body: req.body.post_body,
      img_url: req.body.img_url,
    }
  )
    .then(() => {
      res.status(200).json({
        status: 'success',
        mess3age: 'post has been updated',
      });
    })
    .catch(err => {
      console.log('error', err);
    });
};

const deletePost = (req, res, next) => {
  const post_id = parseInt(req.params.id);
  db.none('DELETE FROM posts WHERE id= $1', [post_id])
    .then(() => {
      res.status(200).json({ message: 'post  deleted' });
    })
    .catch(err => {
      console.log('error', err);
    });
};

module.exports = {
  getAllPosts,
  getSinglePost,
  getUserPosts,
  createNewPost,
  editPost,
  deletePost,
};
