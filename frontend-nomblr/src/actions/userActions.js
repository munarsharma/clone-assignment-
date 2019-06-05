import {
  SET_LOGGEDIN_USER,
  GOT_ERROR,
  USER_INFO_UPDATED,
  SET_BLOG_NAME,
  SET_USER_INFO
} from "./actionTypes";

import axios from "axios";

export const gotError = err => {
  return {
    type: "GOT_ERROR",
    payload: err
  };
};

export const setLoggedInUser = currentUser => {
  return { type: "SET_LOGGEDIN_USER", payload: currentUser };
};

//
// export const getCurrentUser = currentUser => {
// return { type: 'SET_LOGGEDIN_USER', payload: currentUser};
// };

//
// export const goFetchUser = () => dispatch => {
//   // dispatch(fetchUsers());
//   axios
//     .get('/users/:id')
//     .then(res => {
//       console.log(res);
//       dispatch({ type: 'FETCHED_USERS', payload: res.data.users });
//     })
//     .catch(err => {
//       dispatch(gotError(err));
//     });
// };

export const editUserInfo = (id, bio, imgUrl) => dispatch => {
  // dispatch(fetchUsers());
  axios
    .put(`/users/${id}`, { bio: bio, img_url: imgUrl })
    .then(res => {
      console.log(res);
      dispatch({ type: "SET_USER_INFO", payload: res.data.info });
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};
