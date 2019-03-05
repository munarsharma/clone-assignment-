const { db } = require('./connect');

const getAllPosts = (req, res, next) => {
  db.any('SELECT * FROM posts')
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
  const user_id = parseInt(req.params.id);

  db.any(
    'SELECT * FROM posts JOIN users on(users.id = posts.user_id) WHERE users.id=$1',
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
      console.log('error', err);
      next(err);
    });
};

// for text & link posts have: posttype, user_id, and post_body
// for photo post: posttype, user_id, postbody and img_url

const createNewPost = (req, res, next) => {
  let statement = 'INSERT INTO posts';

  if (req.body.postType === 'text') {
    statement = statement.concat(
      '(postType, post_body,  user_id) VALUES( ${postType}, ${post_body}, ${user_id})'
    );
  } else if (req.body.postType === 'img') {
    statement = statement.concat(
      '(postType, post_body,  user_id, img_url) VALUES( ${postType}, ${post_body}, ${user_id}, ${img_url})'
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
