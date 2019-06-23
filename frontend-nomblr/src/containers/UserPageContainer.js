import { connect } from "react-redux";

import { goFetchUserPosts, goFetchLikedPosts } from "../actions/postActions";

import UserProfileRoutes from "../components/user/UserProfileRoutes";

const mapStateToProps = state => {
  return {
    userPosts: state.postsReducers.userPosts,
    currentUser: state.userReducers.currentUser,
    likedPosts: state.postsReducers.likedPosts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserPosts: id => {
      dispatch(goFetchUserPosts(id));
    },

    goFetchLikedPosts: id => {
      dispatch(goFetchLikedPosts(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileRoutes);
