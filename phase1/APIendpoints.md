# API Endpoints

### Root

- `GET /`
  - loads React web app

### users

- `GET/api/users`
  - get all users
- `GET/api/users/:userId`
  - get single user
- `POST/api/users`
  - allows users to sign up ( add new user)
- `PATCH /api/users/:userId`
  - lets a user edit their stuff (edit user info)
- `DELETE/api/user/:userId`
  - deletes user

### posts

- `GET/api/posts`
  - get all posts (for the explore page)
- `GET/api/posts/:postId`
  - get single post
- `GET/api/posts/:userId`
  - get all posts for single user (user archive)
- `POST/api/posts`
  - adds a new post ( allows users to add new posts)
- `PATCH /api/posts/:postId`
  - allows a user to edit a post
- `DELETE/api/posts/:postId`
  - delete single post (allows a user to delete a post)

### likes

- `GET/api/users/:userId/likes`
  - get all likes by user
- `GET/api/posts/:postId/likes`
  - get all likes on post
- `POST/api/users/likes`
  - adds a like
- `DELETE/api/users/unlike`
  - deletes a like

### follow

- `GET/api/users/:userId/followers`
  - get all followers for single user
- `GET/api/users/:userId/following`
  - get all blogs(users) a user is following (list of all blogs a user follows| use: for followers name + post feed on the dashboard)
- `POST/api/users/follow`
  - adds a new follower
- `DELETE/api/users/unfollow`
  - deletes a follower

### comments

- `GET/api/posts/:postId/comments`
  - get all comments on single post
- `GET/api/users/:userId/comments`
  - all comments by user
- `POST/api/posts/comments`
  - adds a new comment (allows users to add new comment)
- `PATCH /api/posts/comments/:commentId`
  - allows a user to edit a comment
- `DELETE/api/posts//comments/:commentId`
  - delete single comment (allows a user to delete a comment)

### tags

- `GET/api/tags`
  - get all tags
- `GET/api/posts/:postId/tags`
  - get all tags on post
- `POST /api/posts/:postId/tag`
  - adds a tag to a post (allows users to input their own tags for their posts)
