import React from "react";
import { Link, withRouter } from "react-router-dom";
import NewLikes from "./newLikes";
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
      if (post.posttype === "text") {
        return (
          <div className="main-cont" key={post.id}>
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
                <div className="post_likes">
                  <p> {post.all_likes} </p>
                  <NewLikes
                    goFetchPosts={this.props.goFetchPosts}
                    currentUser={this.props.currentUser}
                    post_id={post.id}
                    like_id={post.like_id}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      } else if (post.posttype === "img") {
        return (
          <div className="main-cont" key={post.id}>
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

                  <div className="post_likes">
                    <p> {post.all_likes} </p>
                    <NewLikes
                      goFetchPosts={this.props.goFetchPosts}
                      currentUser={this.props.currentUser}
                      post_id={post.id}
                      like_id={post.like_id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });

    return <div className="renderedPosts">{displayFeedPosts}</div>;
  }
}

export default withRouter(AllPosts);
