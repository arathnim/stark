import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

class FakeHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.header}>
            <div className={styles.homebutton}>
              <p className={styles.homebuttontext}>~</p>
            </div>
        </div>
    );
  }
}

export default FakeHeader
