import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

import history from '../history'

import FontAwesome from 'react-fontawesome'

class FakeHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.header}>

              <div className={styles.homebutton}
                   onClick={history.goBack}>
                <FontAwesome name='times' style={{ 'font-size': '0.6em' }} />
              </div>

        </div>
    );
  }
}

export default FakeHeader
