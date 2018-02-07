import React from 'react'
import { render } from 'react-dom'
import {
  HashRouter as Router,
  Redirect,
  Route,
} from 'react-router-dom'

import { AnimatedRoute, AnimatedSwitch } from 'react-router-transition'

import './style.sass'

import Blog from './containers/Blog'
import Projects from './containers/Projects'
import Resume from './containers/Resume'
import Post from './containers/Post'
import Project from './containers/Project'

import history from './history'

class Init extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentpage: 'foo', lastpage: 'bar'};
    history.listen((location, action) => {
      this.setState({lastpage: this.state.currentpage})
      this.setState({currentpage: location.hash})
    })
  }

  render() {
    return (
      <Router history={history}>
        <div>

          <AnimatedSwitch
            atEnter={{ offset: 100, opacity: 0 }}
            atLeave={{ offset: -100, opacity: 0}}
            atActive={{ offset: 0, opacity: 1 }}
            mapStyles={(styles) => ({
              transform: `translateX(${styles.offset}%)`,
              opacity: styles.opacity,
            })}>

          <Route exact path="/blog" component={Blog} />

          <Route exact path="/blog/:path" component={Post} />

          <Route exact path="/projects" component={Projects} />

          <Route exact path="/projects/:path" component={Project} />

          <Route exact path="/resume" component={Resume} />

          <Redirect exact from="/" to="/blog" />

          </AnimatedSwitch>

        </div>
      </Router>
    );
  }
}

document.title = "Home"

render(<Init />, document.getElementById('main'))
