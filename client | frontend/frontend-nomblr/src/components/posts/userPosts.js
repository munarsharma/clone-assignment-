import React from 'react';

//use this for explore page: create a thum-temp like tumblrs

const UserPosts = ({ posts }) => {
  // console.log("meow", posts);
  console.log('POST PROPS??', posts);
  return (
    <div>
      <h1>Hey Posts</h1>
      {posts.map((post, id) => {
        return (
          <div className="postCont" key={post.id}>
            <li>
              <h3> caption: {post.post_body}</h3>
              <img id="postImg" src={post.img_url} alt="postimg" />
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default UserPosts;
