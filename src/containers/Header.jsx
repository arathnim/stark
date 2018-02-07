import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

import { Grid, Row, Col } from 'react-flexbox-grid';

import FontAwesome from 'react-fontawesome'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.header}>
          <Row>

            <Col xs>
            <Link to="/blog/">
                <FontAwesome name='arrow-left' style={{ color: '#fff', 'font-size': '0.7em' }}/>
            </Link>
            </Col>

            <Col xs>
              <Link to="/blog/">
                <p className={styles.navitem}>Blog</p>
              </Link>
            </Col>

            <Col xs>
              <Link to="/projects/">
                <p className={styles.navitem}>Projects</p>
              </Link>
            </Col>

            <Col xs>
              <Link to="/resume/">
                <p className={styles.navitem}>Resume</p>
              </Link>
            </Col>

          </Row>
        </div>
    );
  }
}

export default Header
