import { connect } from 'react-redux';

import { goFetchUserPosts } from '../actions/postActions';

import UserProfileRoutes from '../components/user/UserProfileRoutes';

const mapStateToProps = state => {
  return {
    userPosts: state.postsReducers.userPosts,
    currentUser: state.userReducers.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserPosts: id => {
      dispatch(goFetchUserPosts(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileRoutes);
