import { SET_LOGGEDIN_USER } from "../actions/actionTypes";

const initialState = {
  currentUser: null,
  loggedIn: false
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGGEDIN_USER": {
      return { ...state, currentUser: action.payload, loggedIn: true };
    }
  }
  return state;
};

export default userReducers;
