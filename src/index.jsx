import React from 'react'
import { render } from 'react-dom'
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'

import './style.sass'
import Home from './containers/Home'
import Blog from './containers/Blog'

const Init = () =>
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
    </div>
  </Router>

document.title = "Home"

render(<Init />, document.getElementById('main'))
