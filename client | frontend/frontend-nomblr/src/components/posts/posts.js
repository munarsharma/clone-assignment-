import React from "react";

const Posts = ({ posts }) => {
  console.log("meow", posts);
  return (
    <>
      {posts.map(post => {
        return (
          <div className="postCont">
            <li key={post.id}>
              <h3> caption: {post.post_body}</h3>
              <img id="postImg" src={post.img_url} alt="post img" />
            </li>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
