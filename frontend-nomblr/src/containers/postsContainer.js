import React from "react";
import { connect } from "react-redux";

import { goFetchPosts } from "../actions/postActions";
import DashFeed from "../components/Dashboard/dashFeed";

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

class PostsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <>
        <DashFeed posts={this.props.posts} />
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer);
