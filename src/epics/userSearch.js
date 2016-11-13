// @flow

import { Observable } from 'rxjs';

import type { Epic } from 'redux-Observable';
import type { UserSearchAction } from 'src/types/actions';

import { rxClient } from 'src/utils/client';

const userSearch: Epic = (action$) =>
  action$.ofType('USER_SEARCH').mergeMap((action) =>
    rxClient.get('http://localhost:3000/joji').map((res) => ({
      type: 'USER_SERACH_SUCCESS',
      res
    })).catch(() =>
      Observable.of({
        type: 'USER_SEARCH_FAILURE'
      })
    )
  );

export default userSearch;

