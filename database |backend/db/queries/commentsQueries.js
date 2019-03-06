const { db } = require('./connect');

const getAllComments = (req, res, next) => {
  db.any('SELECT * FROM comments')
    .then(comments => {
      res.status(200).json({
        status: ' success',
        comments: comments,
        message: 'Got all Comments',
      });
    })
    .catch(err => {
      console.log(err);
      next();
    });
};

const getPostComments = (req, res, next) => {
  const postId = parseInt(req.params.id);
  db.any('SELECT * FROM comments WHERE post_id = ${id}', {
    id: postId,
  })
    .then(comment => {
      res.status(200).json({
        status: 'success',
        comment: comment,
        message: 'All comment for this post',
      });
    })
    .catch(err => {
      console.log('error');
      next();
    });
};

const addNewComment = (req, res, next) => {
  db.none(
    'INSERT INTO comments(commenter_id, post_id, body) VALUES (${commenter_id}, ${post_id}, ${body})',
    {
      commenter_id: req.body.commenter_id,
      post_id: req.posts.id,
      body: req.body.body,
    }
  )
    .then(() => {
      res.send(200).json({
        status: ' sucess',
        message: 'A comment has been added',
      });
    })
    .catch(err => {
      console.log('error', err);
      next(err);
    });
};

// const deleteLike = (req, res, next) => {
//   next();
// };

module.exports = { getAllComments, getPostComments, addNewComment };
