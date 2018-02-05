import React from 'react'
import styles from '../style.sass'

import {
  Route,
  Link
} from 'react-router-dom'

import BackHeader from './BackHeader'

const Nav = () =>
  <div className={styles.nav}>
      <BackHeader />
      <div className={styles.content}>
        <div className={styles.title}><Link to="/blog">Blog</Link></div>
        <div className={styles.title}><Link to="/projects">Projects</Link></div>
        <div className={styles.title}><Link to="/resume">Resume</Link></div>
        <div className={styles.title}><Link to="/about">About</Link></div>
        <div className={styles.title}><Link to="/contact">Contact</Link></div>
      </div>
  </div>

export default Nav
