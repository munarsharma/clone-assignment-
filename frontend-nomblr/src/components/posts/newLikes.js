import React from "react";
import axios from "axios";

class NewLikes extends React.Component {
  state = {
    liked: false,
    unliked: true
  };

  handleClick = e => {
    e.preventDefault();

    this.setState({
      liked: !this.state.liked,
      unliked: !this.state.unliked
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
          this.props.goFetchPosts();
        })
        .catch(err => {
          console.log("posting new like", err);
        });
    } else if (!this.state.unliked === true) {
      axios
        .delete(`/likes/${like_id}`)
        .then(() => {
          this.props.goFetchPosts();
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
        <button onClick={this.handleClick}>
          <i className="material-icons">thumb_up</i>
          {!liked ? "like!" : "unliked"}{" "}
        </button>
      </>
    );
  }
}

export default NewLikes;
