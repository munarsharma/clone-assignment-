import React from "react";
import { connect } from "react-redux";

import { goFetchPosts } from "../actions/postActions";
import AllPosts from "../components/posts/allPosts";

const mapStateToProps = state => {
  return {
    fetching: state.postsReducers.fetching,
    posts: state.postsReducers.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => {
      dispatch(goFetchPosts());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPosts);
