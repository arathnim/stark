import React from 'react'
import styles from '../style.sass'

import {
  Route,
  Link
} from 'react-router-dom'

import FakeHeader from './FakeHeader'

const Nav = () =>
  <div className={styles.nav}>
      <FakeHeader />
      <div className={styles.content}>
        <div className={styles.title}><Link to="/blog">Blog</Link></div>
        <div className={styles.title}><Link to="/projects">Projects</Link></div>
        <div className={styles.title}><Link to="/resume">Resume</Link></div>
        <div className={styles.title}><Link to="/about">About</Link></div>
        <div className={styles.title}><Link to="/contact">Contact</Link></div>
      </div>
  </div>

export default Nav
