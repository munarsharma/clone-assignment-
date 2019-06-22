import {
  FETCH_ALL_POSTS,
  FETCHED_ALL_POSTS,
  FETCH_USER_POSTS,
  FETCHED_USER_POSTS,
  GOT_ERROR,
  FETCH_POSTS_BY_POPULARITY,
  SET_POST_TYPE
} from "./actionTypes";
import axios from "axios";

export const gotError = err => {
  return {
    type: "GOT_ERROR",
    payload: err
  };
};

export const setPostType = id => {
  return { type: "SET_POST_TYPE", payload: id };
};

export const fetchAllPosts = () => {
  return { type: "FETCH_ALL_POSTS" };
};

// you dont need this but it is good to have. mateo uses it to change fetching in state from false to true and has something attached to the boolen.
export const fetchUserPosts = () => {
  return { type: "FETCH_USER_POSTS" };
};

export const goFetchPosts = () => dispatch => {
  axios
    .get("/posts")
    .then(res => {
      console.log(res);
      dispatch({ type: "FETCHED_ALL_POSTS", payload: res.data.posts });
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};

export const fetchPostsByPopularity = () => dispatch => {
  axios
    .get("/posts/radar")
    .then(res => {
      console.log(res);
      dispatch({ type: "FETCH_POSTS_BY_POPULARITY", payload: res.data.posts });
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};

export const goFetchUserPosts = id => dispatch => {
  // dispatch(fetchUsers());

  axios
    .get(`/posts/users/${id}`)
    .then(res => {
      dispatch({ type: "FETCHED_USER_POSTS", payload: res.data.posts });
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};

export const goFetchLikedPosts = id => dispatch => {
  axios
    .get(`/likes/users/${id}`)
    .then(res => {
      dispatch({ type: "FETCH_LIKED_POSTS", payload: res.data.likes });
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};

// export const editPosts = () => dispatch => {
//   // dispatch(fetchUsers());
//
//   axios
//     .patch('/posts/users/:id')
//     .then(res => {
//       console.log(res);
//       dispatch({ type: , payload:  });
//     })
//     .catch(err => {
//       dispatch(gotError(err));
//     });
// };
