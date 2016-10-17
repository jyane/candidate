// @flow
import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'src/store';
import Todos from 'src/containers/Todos';

import styles from 'src/App.css';
import svg from 'src/logo.svg';

const store = configureStore();

// test comment
/**
 * Test comment
 */
const App = () => (
  <Provider store={store}>
    <div className={styles.root}>
      { console.log('Can you see this?') }
      <div className={styles.header}>
        <img className={styles.logo} src={svg} alt="logo" />
        <h1>Welcome to the V3 candidate environment.</h1>
      </div>
      <div className={styles.intro}>
        <p>Hello World</p>
      </div>
      <Todos />
    </div>
  </Provider>
);

export default App;

