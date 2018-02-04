import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {meta: []};
}

  render() {
    console.log(this.state)
    return (
      <div>
        <div className={styles.header}>
          <Link to="/">
            <div className={styles.homebuttonspacer}>
              <span className={styles.homebutton}>~</span>
            </div>
          </Link>
        </div>
        <div className={styles.content}>
        </div>
      </div>
    );
  }
}

export default Resume
