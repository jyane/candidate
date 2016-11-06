// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import reducer from 'src/reducers';
import epic from 'src/epics';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getMiddlewres = () => {
  const epicMiddleware = createEpicMiddleware(epic);
  return applyMiddleware(epicMiddleware);
};

const configureStore = () => {
  const middlewares = getMiddlewres();
  return createStore(reducer, composeEnhancers(middlewares));
};

export default configureStore;

