import React from 'react'
import { render } from 'react-dom'
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'

import './style.css'
import Root from './containers/Root'

const Init = () =>
  <Router>
    <div>
      <Route exact path="/" component={Root} />
    </div>
  </Router>

render(<Init />, document.getElementById('main'))
