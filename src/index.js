// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { epicMiddleware } from 'redux-observable';
import { AppContainer } from 'react-hot-loader';

import App from 'src/App';
import epic from 'src/epics';

const el = document.getElementById('root');
ReactDOM.render(<App />, el);

// HMR on development.
if (module.hot) {
  module.hot.accept('./App', () => {
    const Next = require('./App').default;
    ReactDOM.render(<AppContainer><Next /></AppContainer>, el);
  });
  module.hot.accept('./epics', () => {
    const rootEpic = require('./epics').default;
    epicMiddleware.replaceEpic(rootEpic);
  });
}

