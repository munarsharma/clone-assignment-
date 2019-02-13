// const pgp = require("pg-promise")({});
// const db = pgp("postgres://localhost:5432/nomblr_db");

const { db } = require('./connect');

const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
    .then(user => {
      res.status(200).json({
        status: 'success',
        users: user,
        message: 'Got All Users',
      });
    })
    .catch(err => {
      console.log('error', err);
      next(err);
    });
};

const getSingleUser = (req, res, next) => {
  const user_id = parseInt(req.params.id);

  db.one('SELECT * FROM users WHERE id=$1', [user_id])
    .then(user => {
      res.status(200).json({
        status: 'success',
        user: user,
        message: 'got single user',
      });
    })
    .catch(err => {
      console.log('error', err);
      next(err);
    });
};

const createNewUser = (req, res, next) => {
  db.none(
    'INSERT INTO users( username, email) VALUES( ${username}, ${email})',
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

const editUser = (req, res, next) => {
  // const userid = parseInt(req.params.id);
  db.none(
    'UPDATE users SET username= ${username}, bio = ${bio},  img_url= ${img_url}, email= ${email} WHERE id =${id}',

    {
      id: Number(req.params.id),
      username: req.body.username,
      bio: req.body.bio,
      img_url: req.body.img_url,
      email: req.body.email,
    }
  )
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'user has been updated',
      });
    })
    .catch(err => {
      console.log('error', err);
    });
};

const deleteUser = (req, res, next) => {
  const user_id = parseInt(req.params.id);
  db.none('DELETE FROM users WHERE id= $1', [user_id])
    .then(() => {
      res.status(200).json({ message: 'user deleted' });
    })
    .catch(err => {
      console.log('error', err);
    });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createNewUser,
  editUser,
  deleteUser,
};
