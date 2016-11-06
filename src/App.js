// @flow

import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'src/store';
import Todos from 'src/containers/Todos';
import UserSearch from 'src/containers/UserSearch';
import styles from 'src/App.css';
import svg from 'src/logo.svg';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div className={styles.root}>
      <div className={styles.header}>
        <img className={styles.logo} src={svg} alt="logo" />
        <h1>Welcome to the V3 candidate environment.</h1>
      </div>
      <div className={styles.intro}>
        <p>Hello World</p>
      </div>
      <Todos />
      <UserSearch />
    </div>
  </Provider>
);

export default App;

