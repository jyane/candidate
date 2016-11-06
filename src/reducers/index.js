// @flow

import { combineReducers } from 'redux'

import todo from 'src/reducers/todo'
import userSearch from 'src/reducers/userSearch';

export default combineReducers({
  todo,
  userSearch
});

