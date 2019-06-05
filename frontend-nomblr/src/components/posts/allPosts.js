import React from "react";
import { Link, withRouter } from "react-router-dom";

//use this for explore page: create a thum-temp like tumblrs

class AllPosts extends React.Component {
  handleClick = id => {
    this.props.history.push(`/users/${id}`);
  };

  render() {
    if (!this.props.posts) {
      return null;
    }

    const displayFeedPosts = this.props.posts.map((post, id) => {
      // console.log('display post username', post.username);

      if (post.posttype === "text") {
        return (
          <div className="main-cont">
            <img src={post.user_img} alt="" id="user_img" />
            <div className="postCont" key={post.id}>
              <div
                className="postUserName"
                onClick={() => this.handleClick(post.user_id)}
              >
                <h3 className="h3"> {post.username} </h3>
              </div>

              <div className="postContent">
                <p className="postText"> {post.post_body} </p>
              </div>
            </div>
          </div>
        );
      } else if (post.posttype === "img") {
        return (
          <div className="main-cont">
            <div onClick={() => this.handleClick(post.user_id)}>
              <img src={post.user_img} alt="" id="user_img" />
            </div>
            <div className="imgPostCont" key={post.id}>
              <div
                className="postUserName"
                onClick={() => this.handleClick(post.user_id)}
              >
                <h3 className="h3"> {post.username} </h3>
              </div>

              <div id="post-bk">
                <div className="imgPost">
                  <img id="postImg" src={post.img_url} alt="postimg" />
                </div>

                <div className="postContent">
                  <p className="postText"> {post.post_body} </p>
                </div>
              </div>
            </div>
          </div>
        );
      }

      return <div>{displayFeedPosts}</div>;
    });
    return <div className="renderedPosts">{displayFeedPosts}</div>;
  }
}

export default withRouter(AllPosts);
