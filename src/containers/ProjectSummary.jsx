import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

class ProjectSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

        <div className={styles.container}>
          <Link to={"/projects/"+this.props.post.path}>
            <div className={styles.title}>{this.props.post.title}</div>
          </Link>
          <div className={styles.projectdescription}>{this.props.post.summary}</div>
        </div>

    );
  }
}

export default ProjectSummary
