# API Endpoints

### Root

- `GET /`
  - loads React web app

### users

- `GET/api/users`
- `GET/api/users/:userId`
- `POST/api/users`
  - allows users to sign up
- `PATCH /api/users/:userId`
  - lets a user edit their stuff
- `DELETE/api/user/:userId`

### posts

- `GET/api/posts`
- `GET/api/posts/:postId`
- `POST/api/posts`
  - to add a post

* `PATCH /api/posts/:postId`
  - allows a user to edit a post
* `DELETE/api/posts/:postId`

### likes

- `GET/api/users/:userId/likes`
- gets all likes by user
- `GET/api/posts/:postId/likes`
- all likes on post

### followers

- `GET/api/users/:userId/followers`
- `GET/api/users/:userId/following`

### comments

- `GET/api/posts/:postId/comments`
- `GET/api/users/:userId/comments`
- all comments by user
