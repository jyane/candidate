import { createStore } from 'redux';

import reducer from 'src/reducers';

const configureStore = () => {
  const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  return createStore(reducer, enhancer);
};

export default configureStore;

