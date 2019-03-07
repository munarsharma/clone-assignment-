import React from 'react';

//use this for explore page: create a thum-temp like tumblrs

class AllPosts extends React.Component {
  render() {
    if (!this.props.posts) {
      return null;
    }

    const displayFeedPosts = this.props.posts.map((post, id) => {
      if (post.posttype === 'text') {
        return (
          <div className="postCont" key={post.id}>
            <div className="postUserName">
              <h3> {post.username} </h3>
            </div>
            <div className="postContent">
              <p> {post.post_body} </p>
            </div>
          </div>
        );
      } else if (post.posttype === 'img') {
        return (
          <div className="imgPostCont" key={post.id}>
            <div className="userName">
              <h3> {post.username} </h3>
            </div>
            <div className="imgPost">
              <img id="postImg" src={post.img_url} alt="postimg" />
            </div>
            <div className="postContent">
              <p> {post.post_body} </p>
            </div>
          </div>
        );
      }

      return <div>{displayFeedPosts}</div>;
    });
    return <div className="renderedPosts">{displayFeedPosts}</div>;
  }
}

export default AllPosts;
