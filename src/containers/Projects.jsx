import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

import Header from './Header'

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {meta: []};
}

  render() {
    return (
      <div className={styles.screen}>
        <Header />
        <div className={styles.content}>
        </div>
      </div>
    );
  }
}

export default Projects
