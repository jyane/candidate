// @flow

import type { UserSearchAction } from 'src/types/actions';
import type { UserSearch } from 'src/types/states';

const initialState = {};

const userSearch = (state: UserSearch = initialState, action: UserSearchAction): UserSearch => {
  switch (action.type) {
    case 'USER_SERACH':
      return state;
    case 'USER_SERACH_SUCCESS':
      console.log(action.res)
      return state;
    case 'USER_SEARCH_FAILURE':
      return state;
    default:
      return state;
  }
};

export default userSearch;

