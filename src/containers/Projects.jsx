import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

import Header from './Header'
import ProjectSummary from './ProjectSummary'


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {meta: []};
    fetch('project-meta.json').then(x => x.json()).then(x => {this.setState({meta: x})})
  }

  render() {
    return (
      <div className={styles.screen}>
        <div className={styles.content}>
          <hr />
          <hr />
          {this.state.meta.map(x => <ProjectSummary post={x} />)
                          .reduce((acc, x) => acc === null ? [x] : [acc, <hr />, x], null)}
          <hr />
        </div>
      </div>
    );
  }
}

export default Projects
