import { createStore } from 'redux';

import reducer from 'src/reducers';

const configureStore = () => {
  return createStore(reducer);
};

export default configureStore;

