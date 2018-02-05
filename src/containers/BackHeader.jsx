import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

import history from '../history'

class FakeHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.header}>

              <div className={styles.homebutton}
                   onClick={history.goBack}>
                <p className={styles.homebuttontext}>X</p>
              </div>
            
        </div>
    );
  }
}

export default FakeHeader
