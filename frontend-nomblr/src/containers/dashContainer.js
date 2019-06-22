import { connect } from "react-redux";

import { goFetchPosts, fetchPostsByPopularity } from "../actions/postActions";
import UserDashRoutes from "../components/Dashboard/UserDashRoutes";

const mapStateToProps = state => {
  return {
    fetching: state.postsReducers.fetching,
    posts: state.postsReducers.posts,
    currentUser: state.userReducers.currentUser,
    byPopularity: state.postsReducers.byPopularity
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goFetchPosts: () => {
      dispatch(goFetchPosts());
    },

    fetchPostsByPopularity: () => {
      dispatch(fetchPostsByPopularity());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDashRoutes);
