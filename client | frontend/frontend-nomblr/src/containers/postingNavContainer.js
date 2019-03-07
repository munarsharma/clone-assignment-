import React from "react";
import { connect } from "react-redux";

import { setPostType } from "../actions/postActions";
import PostNavbar from "../components/Dashboard/postingNavbar";

const mapStateToProps = state => {
  return {
    postType: state.postsReducers.postType
  };
};

const mapDispatchToProps = dispatch => {
  console.log("meow fetch is a go");
  return {
    setPostType: postType => {
      dispatch(setPostType(postType));
    }
  };
};

class postingNavContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <></>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(postingNavContainer);
