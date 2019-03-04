import React from "react";
import { Route, Switch } from "react-router-dom";
import TextPostForm from "./textPostForm";
import ImgPostForm from "./imgPostForm";

class AddNewPost extends React.Component {
  state = {
    newTextPost: "",
    newImgPost: "",
    postType: "",
    imgCaption: ""
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

  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    const { newImgPost, newTextPost, postType, imgCaption } = this.state;

    return (
      <>
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
        />
      </>
    );
  }
}

export default AddNewPost;
