import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

import { Grid, Row, Col } from 'react-flexbox-grid';

import FontAwesome from 'react-fontawesome'

import history from '../history'

var isMobile = 'ontouchstart' in window;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (isMobile){
      return(
        <div className={styles.header}>
          <Row>

            <Col xs>
              <Link to="/blog/">
                <div className={styles.navrow}>
                  <p className={styles.mobilenav}>Blog</p>
                </div>
              </Link>
            </Col>

            <Col xs>
              <Link to="/projects/">
                <div className={styles.navrow}>
                  <p className={styles.mobilenav}>Projects</p>
                </div>
              </Link>
            </Col>

            <Col xs>
              <Link to="/resume/">
                <div className={styles.navrow}>
                  <p className={styles.mobilenav}>Resume</p>
                </div>
              </Link>
            </Col>

          </Row>
        </div>
      );
    }
    return (
        <div className={styles.header}>
          <Row>

            <Col xs>
              <div className={styles.navrow} onClick={history.goBack}>
                  <FontAwesome name='arrow-left' style={{ color: '#fff', 'font-size': '0.7em', 'vertical-align': '-60%' }}/>
              </div>
            </Col>

            <Col xs>
              <Link to="/blog/">
                <div className={styles.navrow}>
                  <p className={styles.navitem}>Blog</p>
                </div>
              </Link>
            </Col>

            <Col xs>
              <Link to="/projects/">
                <div className={styles.navrow}>
                  <p className={styles.navitem}>Projects</p>
                </div>
              </Link>
            </Col>

            <Col xs>
              <Link to="/resume/">
                <div className={styles.navrow}>
                  <p className={styles.navitem}>Resume</p>
                </div>
              </Link>
            </Col>

          </Row>
        </div>
    );
  }
}

export default Header
