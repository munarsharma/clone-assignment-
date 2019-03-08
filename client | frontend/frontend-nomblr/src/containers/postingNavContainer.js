import React from "react";
import { connect } from "react-redux";

import { setPostType } from "../actions/postActions";
import PostNavbar from "../components/Dashboard/postingNavbar";

//get all photos and sort them based on type.
//posting a post: should i have dif queries for each type or all the same one?

const mapStateToProps = state => {
  return {
    id: state.postsReducers.postType
  };
};

const mapDispatchToProps = dispatch => {
  console.log("meow fetch is a go");
  return {
    setPostType: id => {
      dispatch(setPostType(id));
    }
  };
};

class PostNavContainer extends React.Component {
  render() {
    return <></>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostNavContainer);
