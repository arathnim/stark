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
import Header from './containers/Header'

import history from './history'


function order(p) {
  if (p == "#/blog/") {
    return 1;
  }
  if (p.startsWith("#/blog/")) {
    return 2;
  }
  if (p == "#/projects/") {
    return 3;
  }
  if (p.startsWith("#/projects/")) {
    return 4;
  }
  if (p == "#/resume/") {
    return 5;
  }
  return 0;
}

function calcEnterOffset(c, l) {
  if (order(c) < order(l)) {
    return -100;
  } else {
    return  100;
  }
}

function calcExitOffset(c, l) {
  if (order(c) > order(l)) {
    return -100;
  } else {
    return  100;
  }
}

class Init extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentpage: '#/blog/', lastpage: '#/blog/'};
    history.listen((location, action) => {
      this.setState({lastpage: this.state.currentpage})
      this.setState({currentpage: location.hash})
    })
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <AnimatedSwitch
            atEnter={{ offset: calcEnterOffset(this.state.currentpage, this.state.lastpage), opacity: 0 }}
            atLeave={{ offset: calcExitOffset(this.state.currentpage, this.state.lastpage), opacity: 0}}
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
