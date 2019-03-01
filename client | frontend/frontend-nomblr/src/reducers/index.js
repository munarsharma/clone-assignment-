import { combineReducers } from 'redux';

import postsReducers from './postReducer';
const combinedReducers = combineReducers({ postsReducers });

export default combinedReducers;
