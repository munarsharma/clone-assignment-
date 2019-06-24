import React from "react";

import { Link, withRouter } from "react-router-dom";

// import FollowButton from "./followButton";

//fix issue with user id being passed down to userprofile/likes
class Radar extends React.Component {
  handleClick = id => {
    this.props.history.push(`/users/${id}`);
  };
  render() {
    let raderPost = this.props.byPopularity[0];

    return (
      <div className="radarArea">
        {raderPost ? (
          <>
            <h2> radar</h2>

            <div className="rader-top">
              <h3>{raderPost.username}</h3>
              <button
                className="followButton"
                onClick={() => this.handleClick(raderPost.user_id)}
              >
                {" "}
                +{" "}
              </button>
            </div>
            <div id="radar-img-cont">
              <img id="radarImg" src={raderPost.img_url} alt="" />
            </div>

            <div className="post_likes">
              <p>{raderPost.post_body}</p>
              <p> {raderPost.all_likes} </p>
            </div>
          </>
        ) : (
          "something"
        )}
      </div>
    );
  }
}

export default withRouter(Radar);
