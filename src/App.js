import React from 'react'

import styles from './App.css'

const add = (x: number, y: string) => x + y + ''

const App = () => (
  <div className={styles.app}>
    <h1>Hello World</h1>
    <p>Hello World</p>
  </div>
)

export default App

