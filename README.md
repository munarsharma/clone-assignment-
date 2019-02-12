# Nomblr

Nomblr is a Tumblr clone application that allows users to express their love for all things noms and yums!

# Minimum Viable Product

- User can create an account
- User can delete an account
- User can log in to their account
- User can create, edit, and post a post
- User can create and post a new post using the post-navbar
- Users can follow one another
- User can like and comment on posts
- User can search for content: users, posts, etc. using the search bar

# Design Docs

- [View Wireframes](./wireframes)
- [React Components](./reactComp.md)
- [API Endpoints](./APIendpoints.md)
- [DB Schema](./schema.md)

# Implementation Timeline

## Phase 1: Backend setup and Frontend User Authentication (4 days)

- begin setting up backend user routes and queries
- create and seed database
- build homepage, login page, and signup page
- users can be created

## Phase 2: Frontend User Profile (4 days)

- create a basic user profile page using react
- allow a user to login, view, and edit personal information
- style user profile and home page

## Phase 3: Backend and basic dashboard frontend set up for posts, likes, comments, and tags (6 days)

- set up backend follows, posts, comments, likes. and tags routes and queries
- create post temp with the ability to take in comments, tags, and likes
- create and link dashboard navbar and posts navbar
- build a functional search bar where a user can search all content

## Phase 4: frontend dashboard (3 days)

- bring all pieces of dashboard together
- style and organize dashboard as a whole
- add an infinite scroll to the dashBoard
- add recommended boxes
- add rader box

## Phase 5: Brining it all together (4 day)

- finish up linking all navbars
- test application: adding a new post, a new comment, a new user, a new follower, an new like

# Bonus Features

- send private messages
- chat portal
