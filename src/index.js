import React from 'react'
import ReactDOM from 'react-dom'
import Rx from 'rxjs/Rx'
import { AppContainer } from 'react-hot-loader'

import App from 'src/App'

const el = document.getElementById('root')
ReactDOM.render(<App />, el)

Rx.Observable.of(1, 2, 3).subscribe((x) => console.log(x))

// HMR on development.
if (module.hot) {
  module.hot.accept('./App', () => {
    const Next = require('./App').default
    ReactDOM.render(<AppContainer><Next /></AppContainer>, el)
  })
}

