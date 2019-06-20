import { connect } from 'react-redux';

import { goFetchLikedPosts } from '../actions/postActions';

import LikedPostsDisplay from '../components/user/LikedPostsDisplay';

const mapStateToProps = state => {
  return {
    likedPosts: state.postsReducers.userPosts,
    currentUser: state.userReducers.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goFetchLikedPosts: id => {
      dispatch(goFetchLikedPosts(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikedPostsDisplay);
