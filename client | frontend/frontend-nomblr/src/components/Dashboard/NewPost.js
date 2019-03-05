import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import TextPostForm from "./textPostForm";
import ImgPostForm from "./imgPostForm";
import axios from "axios";
import UserDash from "./UserDash";
import PostNavbar from "./postingNavbar";

class AddNewPost extends React.Component {
  state = {
    newTextPost: "",
    newImgPost: "",
    postType: " ",
    imgCaption: "",
    submited: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleTextClick = e => {
    this.setState({
      postType: "text"
    });
  };

  handleImgClick = e => {
    this.setState({
      postType: "img"
    });
  };

  // handleTextClick = e => {
  //   this.setState({
  //     postType: "text"
  //   });
  // };
  //
  // handleImgClick = e => {
  //   this.setState({
  //     postType: "img"
  //   });
  // };

  handleSubmit = e => {
    e.preventDefault();

    const { newImgPost, newTextPost, postType, imgCaption } = this.state;

    if (postType === "text") {
      axios
        .post("/posts/new", { postType: postType, post_body: newTextPost })
        .catch(err => {
          console.log("error:", err);
        });
    } else if (postType === "img") {
      axios
        .post("/posts/new", {
          postType: postType,
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
    const { newImgPost, newTextPost, postType, imgCaption } = this.state;

    if (this.state.submited) {
      return <Redirect to="/dashboard" component={UserDash} />;
    }

    return (
      <>
        <PostNavbar
          handleImgClick={this.handleImgClick}
          handleTextClick={this.handleTextClick}
        />
        <h1>meow</h1>

        <TextPostForm
          newTextPost={newTextPost}
          postType={postType}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <br />
        <ImgPostForm
          newImgPost={newImgPost}
          imgCaption={imgCaption}
          postType={postType}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default AddNewPost;
