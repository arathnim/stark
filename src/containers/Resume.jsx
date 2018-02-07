import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

import Header from './Header'

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: "foo"};
    fetch("resume.json").then(x => x.json()).then(x => {this.setState({data: x})})
}

  render() {
    return (
      <div className={styles.screen}>
        <div className={styles.content}>
          <hr />
          <hr />
          <div className={styles.container} dangerouslySetInnerHTML={{ __html: this.state.data.content }} />
          <hr />
        </div>
      </div>
    );
  }
}

export default Resume
