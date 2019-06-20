import { connect } from "react-redux";

import { goFetchPosts } from "../actions/postActions";
import UserDashRoutes from "../components/Dashboard/UserDashRoutes";

const mapStateToProps = state => {
  return {
    fetching: state.postsReducers.fetching,
    posts: state.postsReducers.posts,
    currentUser: state.userReducers.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goFetchPosts: () => {
      dispatch(goFetchPosts());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDashRoutes);
