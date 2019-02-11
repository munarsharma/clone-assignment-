# NOMBLR Schema

## users

| column name | data type | details                   |
| ----------- | --------- | ------------------------- |
| id          | integer   | not null, primary key     |
| username    | string    | not null, indexed, unique |
| email       | string    | not null, indexed, unique |
| password    | string    | not null                  |
| age         | integer   | not null                  |
| gender      | string    | not null                  |

## posts

| column name  | data type | details               |
| ------------ | --------- | --------------------- |
| id           | integer   | not null, primary key |
| postType     | string    | not null              |
| post_content | string    | not null, url         |
| user_id      | integer   | references users(id)  |
| timestamp    | date time | not null              |

## follow

| column name  | data type | details               |
| ------------ | --------- | --------------------- |
| id           | integer   | not null, primary key |
| follower_id  | integer   | references users(id)  |
| following_id | integer   | references users(id)  |

## likes

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| user_id     | integer   | references users(id)  |
| post_id     | integer   | references posts(id)  |

## comments

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| post_id     | integer   | references posts(id)  |
| user_id     | integer   | references users(id)  |
| body        | text      | not null              |

## tags

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| post_id     | integer   | references posts(id)  |
| tag_name    | string    | not null              |
