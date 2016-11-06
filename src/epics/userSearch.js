// @flow

import { Observable } from 'rxjs';

import type { Epic } from 'src/types/epic';
import type { UserSearchAction } from 'src/types/actions';

import { rxClient } from 'src/utils/client';

const userSearch: Epic<UserSearchAction> = (action$) => {
  console.log(action$)
  return action$.ofType('USER_SERACH').mapTo({
    type: 'USER_SERACH_SUCCESS'
  });
  // return action$.ofType('USER_SERACH').mergeMap((action) =>
      // rxClient.get('http://localhost:3000/')
        // .map((res) => {
          // Observable.of({
            // type: 'USER_SERACH_SUCCESS'
          // })
        // })
        // .catch((e) =>
          // Observable.of({
            // type: 'USER_SEARCH_FAILURE'
          // })
        // )
  // );
}

export default userSearch;

