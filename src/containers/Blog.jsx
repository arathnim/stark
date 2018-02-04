import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: "<p>hi</p>"};
  }

  render() {
    return (
      <div>
        <div className={styles.header}>
          <Link to="/">
            <div className={styles.homebuttonspacer}><span className={styles.homebutton}>~</span></div>
          </Link>
        </div>
        <div className={styles.content}>
          <hr />
          <div className={styles.postteaser}>
            <div className={styles.title}>Wernicke</div>
            <div className={styles.date}>November 5th, 2017</div>
            <p>Wernicke is a framework made to ease development of parsing languages, such as regular expressions and Instaparse, by providing a highly optimized s-expression format to represent common parsing constructs. This core language is fully extensible, the internal functions used to define parsers are exposed. Wernicke also provides several advanced features, like error handling, custom error formatting, parsing from streams, incremental reparsing, and scanning.</p>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default Blog
