import React from 'react'
import { render } from 'react-dom'
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'

import './style.sass'
import Home from './containers/Home'
import Blog from './containers/Blog'
import Projects from './containers/Projects'
import Resume from './containers/Resume'
import About from './containers/About'
import Contact from './containers/Contact'

const Init = () =>
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </div>
  </Router>

document.title = "Home"

render(<Init />, document.getElementById('main'))
