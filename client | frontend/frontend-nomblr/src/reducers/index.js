import { combineReducers } from 'redux';

import userReducers from './userReducer';
import postsReducers from './postReducer';
const combinedReducers = combineReducers({ postsReducers, userReducers });

export default combinedReducers;
