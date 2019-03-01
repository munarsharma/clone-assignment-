import React from "react";

//use this for explore page: create a thum-temp like tumblrs

const AllPosts = ({ posts }) => {
  console.log("meow", posts);
  return (
    <>
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
    </>
  );
};

export default AllPosts;
