import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

import PostTeaser from './PostTeaser'
import Header from './Header'

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {meta: []};
    fetch('blog-meta.json').then(x => x.json()).then(x => {this.setState({meta: x})})
  }

  render() {
    return (
      <div className={styles.screen}>
        <Header />
        <div className={styles.content}>
          <hr />
          {this.state.meta.map(x => <PostTeaser post={x} />)
                          .reduce((acc, x) => acc === null ? [x] : [acc, <hr />, x], null)}
          <hr />
        </div>
      </div>
    );
  }
}

export default Blog
