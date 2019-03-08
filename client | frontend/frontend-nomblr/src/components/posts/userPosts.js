import React from 'react';

//use this for explore page: create a thum-temp like tumblrs

class UserPosts extends React.Component {
  render() {
    if (!this.props.posts) {
      return null;
    }

    const displayUserPosts = this.props.posts.map((post, id) => {
      if (post.posttype === 'text') {
        return (
          <div className="userPostCont" key={post.id}>
            <div clasName="userName">
              <h3> {post.username} </h3>
            </div>
            <div clasName="userPostContent">
              <p id="text"> {post.post_body} </p>
            </div>
          </div>
        );
      } else if (post.posttype === 'img') {
        return (
          <div className="userImgPostCont" key={post.id}>
            <div clasName="userName">
              <h3> {post.username} </h3>
            </div>
            <div className="userImgPost">
              <img id="userPostImg" src={post.img_url} alt="postimg" />
            </div>
            <div clasName="userPostContent">
              <p id="postText"> {post.post_body} </p>
            </div>
          </div>
        );
      }

      return <div>{displayUserPosts}</div>;
    });

    return <div className="userRenderedPosts"> {displayUserPosts} </div>;
  }
}

export default UserPosts;
