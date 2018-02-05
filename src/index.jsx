import React from 'react'
import { render } from 'react-dom'
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'
import { AnimatedRoute } from 'react-router-transition'

import './style.sass'
import Home from './containers/Home'
import Blog from './containers/Blog'
import Projects from './containers/Projects'
import Resume from './containers/Resume'
import About from './containers/About'
import Contact from './containers/Contact'
import Post from './containers/Post'
import Nav from './containers/Nav'

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
    console.log(`currentpage: ${this.state.currentpage}`)
    console.log(`lastpage: ${this.state.lastpage}`)
    return (
      <Router history={history}>
        <div>

          <AnimatedRoute exact path="/" component={Home}
            atEnter={{ offset: -100 }}
            atLeave={{ offset: -100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
              left: `${styles.offset}%`,
            })}
          />

          <AnimatedRoute exact path="/blog" component={Blog}
            atEnter={{ offset: this.state.currentpage == "#/nav" ? -100 : -100 }}
            atLeave={{ offset: this.state.currentpage == "#/nav" ? 100 : -100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
              left: `${styles.offset}%`,
            })}
          />

          <AnimatedRoute exact path="/blog/:path" component={Post}
            atEnter={{ offset: 100 }}
            atLeave={{ offset: 100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
              left: `${styles.offset}%`,
            })}
          />

          <AnimatedRoute exact path="/projects" component={Projects}
            atEnter={{ offset: 100 }}
            atLeave={{ offset: 100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
              left: `${styles.offset}%`,
            })}
          />

          <AnimatedRoute exact path="/resume" component={Resume}
            atEnter={{ offset: 100 }}
            atLeave={{ offset: 100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
              left: `${styles.offset}%`,
            })}
          />

          <AnimatedRoute exact path="/about" component={About}
            atEnter={{ offset: 100 }}
            atLeave={{ offset: 100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
              left: `${styles.offset}%`,
            })}
          />

          <AnimatedRoute exact path="/contact" component={Contact}
            atEnter={{ offset: 100 }}
            atLeave={{ offset: 100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
              left: `${styles.offset}%`,
            })}
          />

          <AnimatedRoute exact path="/nav" component={Nav}
            atEnter={{ offset: -100 }}
            atLeave={{ offset: -100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
              left: `${styles.offset}%`,
            })}
          />

        </div>
      </Router>
    );
  }
}

document.title = "Home"

render(<Init />, document.getElementById('main'))
