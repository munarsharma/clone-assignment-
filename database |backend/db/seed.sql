DROP DATABASE IF EXISTS nomblr_db;
CREATE DATABASE nomblr_db;

\c nomblr_db;



CREATE TABLE users (
id SERIAL PRIMARY KEY NOT NULL,
username VARCHAR UNIQUE NOT NULL,
bio TEXT NOT NULL,
img_url VARCHAR,
email VARCHAR UNIQUE NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE posts (
id SERIAL PRIMARY KEY,
postType VARCHAR NOT NULL,
post_body VARCHAR NOT NULL,
user_id INT REFERENCES users(id) ON DELETE CASCADE,
img_url VARCHAR,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE follow (
id SERIAL PRIMARY KEY,
follower_id INT REFERENCES users(id) ON DELETE CASCADE,
following_id INT REFERENCES users(id) ON DELETE CASCADE
);


CREATE TABLE likes (
id SERIAL PRIMARY KEY ,
liker_id INT REFERENCES users(id) ON DELETE CASCADE,
post_id INT REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE comments (
id SERIAL PRIMARY KEY,
commenter_id INT REFERENCES users(id) ON DELETE CASCADE,
post_id INT REFERENCES posts(id) ON DELETE CASCADE,
body TEXT NOT NULL
);

CREATE TABLE tags (
id SERIAL PRIMARY KEY,
post_id INT REFERENCES posts(id) ON DELETE CASCADE,
tag_name VARCHAR NOT NULL
);

INSERT INTO users (username, bio, img_url, email)
VALUES ('kitkats', 'fat cat probs', 'imgurl', 'fatkat@gmail.com' ), ('barns&yarns', 'i like apples', 'imgurl', 'barnsyarns@gmail.com' )
