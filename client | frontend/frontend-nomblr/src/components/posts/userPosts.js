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
          <div className="postCont" key={post.id}>
            <div clasName="userName">
              <h3> {post.username} </h3>
            </div>
            <div clasName="postContent">
              <p> {post.post_body} </p>
            </div>
          </div>
        );
      } else if (post.posttype === 'img') {
        return (
          <div className="postCont" key={post.id}>
            <div className="imgPost">
              <img
                id="postImg"
                src={post.img_url}
                alt="postimg"
                height="450"
                width="455"
              />
            </div>
            <h3> caption: {post.post_body}</h3>
          </div>
        );
      }

      return <div>{displayUserPosts}</div>;
    });

    return <div className="renderedPosts"> {displayUserPosts} </div>;
  }
}

export default UserPosts;
