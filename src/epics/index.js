import { combineEpics } from 'redux-observable';

import userSearch from 'src/epics/userSearch';

const epic = combineEpics(
  userSearch
);

export default epic;

