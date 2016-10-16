import React from 'react'

import styles from 'src/App.css'
import svg from 'src/logo.svg'

// test comment
/**
 * Test comment
 */
const App = () => (
  <div className={styles.root}>
    { console.log('Can you see this?') }
    <div className={styles.header}>
      <img className={styles.logo} src={svg} alt="logo" />
      <h1>Welcome to the V3 candidate environment.</h1>
    </div>
    <div className={styles.intro}>
      <p>Hello World</p>
    </div>
  </div>
)

export default App

