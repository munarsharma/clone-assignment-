import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import TextPostForm from "./textPostForm";
import ImgPostForm from "./imgPostForm";
import axios from "axios";
import UserDashRoutes from "./UserDashRoutes";
import PostNavbar from "./postingNavbar";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    postType: state.postsReducers.postType
  };
};

class AddNewPost extends React.Component {
  state = {
    newTextPost: "",
    newImgPost: "",
    posttype: " ",
    imgCaption: "",
    submited: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { newImgPost, newTextPost, posttype, imgCaption } = this.state;

    if (posttype === "text") {
      axios
        .post("/posts/new", { postType: posttype, post_body: newTextPost })
        .catch(err => {
          console.log("error:", err);
        });
    } else if (posttype === "img") {
      axios
        .post("/posts/new", {
          postType: posttype,
          post_body: imgCaption,
          img_url: newImgPost
        })
        .catch(err => {
          console.log("error:", err);
        });
    }
    this.setState({
      submited: true
    });
  };

  render() {
    const { newImgPost, newTextPost, posttype, imgCaption } = this.state;

    if (this.state.submited) {
      return <Redirect to="/dashboard" component={UserDashRoutes} />;
    }

    if (this.props.postType === "text") {
      return (
        <>
          <h1>meow</h1>

          <TextPostForm
            newTextPost={newTextPost}
            posttype={posttype}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </>
      );
    } else if (this.props.postType === "img") {
      return (
        <>
          <ImgPostForm
            newImgPost={newImgPost}
            imgCaption={imgCaption}
            posttype={posttype}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  null
)(AddNewPost);
