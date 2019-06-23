import React from 'react';
// import NewLikes from "./newLikes";
//use this for explore page: create a thum-temp like tumblrs

class LikedPostsDisplay extends React.Component {
  render() {
    // console.log("LIKED POSTS PAGE", this.props);

    if (!this.props.posts) {
      return null;
    }

    const displayLikedPosts = this.props.posts.map((post, id) => {
      return (
        <div className="userImgPostCont" key={post.id}>
          <div className="userName">
            <h3> {post.username} </h3>
          </div>
          <div className="userImgPost">
            <img id="userPostImg" src={post.img_url} alt="postimg" />
          </div>
          <div className="userPostContent">
            <p className="postText"> {post.post_body} </p>
            <div className="post_likes">
              <p> {post.all_likes} </p>
            </div>
          </div>
        </div>
      );
    });
    return <div className="userRenderedPosts"> {displayLikedPosts} </div>;
  }
}

export default LikedPostsDisplay;
