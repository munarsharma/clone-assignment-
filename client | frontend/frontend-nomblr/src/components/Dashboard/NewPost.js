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

  render() {
    const { newImgPost, newTextPost, postType, imgCaption } = this.state;

    return (
      <>
        <h1>meow</h1>

        <TextPostForm newTextPost={newTextPost} postType={postType} />
        <br />
        <ImgPostForm
          newImgPost={newImgPost}
          imgCaption={imgCaption}
          postType={postType}
        />
      </>
    );
  }
}

export default AddNewPost;
