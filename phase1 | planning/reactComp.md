# Component Hierarchy

### MainPage

|Route: nomblr/

- logo
- search bar
- login link | Route: nomblr/login
- sign up link | Route: nomblr/signup

### login

|Route: nomblr/login

- logo
- search bar
- login form:
  - email
  - password

### signup

|Route: nomblr/signup

- logo
- search bar
- signup form:
  - email
  - password
  - username

### search bar

- input box
- submit button

### DashBoard

|Route: nomblr/dashboard

- search bar
- logo
- dash navbar
- post navbar
- post feed: user avatar + user post
- rader box
- recommendations box

### dash navbar

- Links to:

  - explore page
  - inbox
  - chat portal
  - user activity
  - account: links to - what user has liked, following, settings
  - postnav

### post navbar

- Links to input boxes where a user can post:
  - text posts
  - photos
  - links

### users

|Route: nomblr/users/username

- user profile:
  - search bar
  - profile header navbar
  - user profile nav bar: links to: -user post, user likes, followers, archive
  - user post feed
  - 'recently liked' box
- user login
- user signin

### header

- logo
- search box
- main nav bar

### footer

- links to the about page
- links to help page
