import React from 'react';
import NewLikes from './newLikes';
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
            <div className="userName">
              <h3> {post.username} </h3>
            </div>
            <div className="userPostContent">
              <p className="text"> {post.post_body} </p>
            </div>
          </div>
        );
      } else if (post.posttype === 'img') {
        return (
          <div className="userImgPostCont" key={post.id}>
            <div className="postUserName">
              <h3> {post.username} </h3>
            </div>

            <div className="userImgPost">
              <img id="userPostImg" src={post.img_url} alt="postimg" />
            </div>

            <div className="userPostContent">
              <div className="postText">
                <p> {post.post_body} </p>
              </div>
              <div className="post_likes">
                <p> {post.all_likes} </p>
                <NewLikes
                  fetchUserPosts={this.props.fetchUserPosts}
                  currentUser={this.props.currentUser}
                  post_id={post.id}
                  like_id={post.like_id}
                  profile_id={this.props.id}
                />
              </div>
            </div>
          </div>
        );
      }
    });

    return <div className="userRenderedPosts"> {displayUserPosts} </div>;
  }
}

export default UserPosts;
