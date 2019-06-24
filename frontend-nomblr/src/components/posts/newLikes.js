import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import like from "../../images/liked.png";
import unlike from "../../images/unliked.png";

class NewLikes extends React.Component {
  state = {
    liked: false
  };

  handleClick = e => {
    e.preventDefault();

    this.setState({
      liked: !this.state.liked
    });

    this.likedReq();
  };

  //fix button so it deletes and updates

  likedReq = () => {
    let like_id = this.props.like_id.pop();

    if (!this.state.liked === true) {
      let user_id = this.props.currentUser.id;

      axios
        .post("/likes/new", {
          user_id: user_id,
          post_id: this.props.post_id
        })

        .then(() => {
          {
            this.props.match.path === "/dashboard"
              ? this.props.goFetchPosts()
              : this.props.fetchUserPosts(this.props.profile_id);
          }
        })
        .catch(err => {
          console.log("posting new like", err);
        });
    } else if (!this.state.unliked === true) {
      axios
        .delete(`/likes/${like_id}`)
        .then(() => {
          {
            this.props.match.path === "/dashboard"
              ? this.props.goFetchPosts()
              : this.props.fetchUserPosts(this.props.profile_id);
          }
        })
        .catch(err => {
          console.log("posting new fave", err);
        });
    }
  };

  render() {
    const { liked } = this.state;
    // console.log(liked, unliked);
    return (
      <>
        {!liked ? (
          <>
            {" "}
            <img
              id="liked"
              src={unlike}
              alt="unliked"
              onClick={this.handleClick}
            />{" "}
          </>
        ) : (
          <>
            {" "}
            <img id="liked" src={like} alt="liked" onClick={this.handleClick} />
          </>
        )}{" "}
      </>
    );
  }
}

export default withRouter(NewLikes);
