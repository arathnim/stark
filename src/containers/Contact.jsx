import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {meta: []};
}

  render() {
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
        <hr />
        </div>
      </div>
    );
  }
}

export default Contact
