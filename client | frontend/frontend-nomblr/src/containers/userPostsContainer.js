import React from "react";
import { connect } from "react-redux";

import { goFetchUserPosts } from "../actions/postActions";
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
    fetchUserPosts: posts => {
      dispatch(goFetchUserPosts(posts));
    }
  };
};

class UserPostsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUserPosts();
  }

  render() {
    return (
      <>
        <ul>
          {" "}
          <UserPosts posts={this.props.posts} />{" "}
        </ul>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPostsContainer);
