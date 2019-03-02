import React from "react";
import { connect } from "react-redux";

import { goFetchPosts, goFetchUserPosts } from "../actions/postActions";
import UserPosts from "../components/posts/userPosts";

const mapStateToProps = state => {
  return {
    fetching: state.postsReducers.fetching,
    posts: state.postsReducers.posts
  };
};

const mapDispatchToProps = dispatch => {
  console.log("meow fetch is a go");
  return {
    fetchPosts: posts => {
      dispatch(goFetchPosts(posts));
    },
    fetchUserPosts: posts => {
      dispatch(goFetchUserPosts(posts));
    }
  };
};

class PostsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUserPosts();
  }

  render() {
    return (
      <>
        <h1> nahnu huna </h1>
        <UserPosts posts={this.props.posts} />
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer);
