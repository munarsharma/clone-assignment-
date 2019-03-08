import React from "react";
import { Redirect, Link } from "react-router-dom";
import TextPostForm from "./textPostForm";
import ImgPostForm from "./imgPostForm";
import axios from "axios";
import UserDashRoutes from "./UserDashRoutes";
//import PostNavbar from "./postingNavbar";
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

    const { newImgPost, newTextPost, imgCaption } = this.state;
    debugger;
    if (this.props.postType === "text") {
      axios
        .post("/posts/new", {
          postType: this.props.postType,
          post_body: newTextPost
        })
        .catch(err => {
          console.log("error:", err);
        });
    } else if (this.props.postType === "img") {
      axios
        .post("/posts/new", {
          postType: this.props.postType,
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
    const { newImgPost, newTextPost, imgCaption } = this.state;

    if (this.state.submited) {
      return <Redirect to="/dashboard" component={UserDashRoutes} />;
    }

    if (this.props.postType === "text") {
      return (
        <>
          <Link to="/dashboard" className="backBtn">
            {" "}
            Back{" "}
          </Link>
          <TextPostForm
            newTextPost={newTextPost}
            posttype={this.props.postType}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </>
      );
    } else if (this.props.postType === "img") {
      return (
        <>
          <Link to="/dashboard" className="backBtn">
            {" "}
            Back{" "}
          </Link>
          <ImgPostForm
            newImgPost={newImgPost}
            imgCaption={imgCaption}
            posttype={this.props.postType}
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
