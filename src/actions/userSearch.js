// @flow

import type { UserSearchAction } from 'src/types/actions';

const searchUser = (): UserSearchAction => ({
  type: 'USER_SEARCH'
});

export {
  searchUser
};

