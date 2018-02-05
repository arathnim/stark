import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.header}>
          <Link to="/">
            <div className={styles.homebutton}>
              <p className={styles.homebuttontext}>~</p>
            </div>
          </Link>
        </div>
    );
  }
}

export default Header
