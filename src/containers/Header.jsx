import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.header}>
          <Link to="/nav">
            <div className={styles.homebutton}>
              <FontAwesome name='bars' style={{ 'font-size': '0.6em' }} />
            </div>
          </Link>
        </div>
    );
  }
}

export default Header
