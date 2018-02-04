import React from 'react'
import styles from '../style.sass'

import {
  Route,
  Link
} from 'react-router-dom'

import meta from '../../public/blog-meta.json'

const Home = () =>
  <div className={styles.home}>
      <div className={styles.homebuttonspacer}><span className={styles.homebutton}>~</span></div>
      <div className={styles.homespacer}><Link to="/blog">Blog</Link></div>
      <div className={styles.homespacer}><Link to="/projects">Projects</Link></div>
      <div className={styles.homespacer}><Link to="/resume">Resume</Link></div>
      <div className={styles.homespacer}><Link to="/about">About</Link></div>
      <div className={styles.homespacer}><Link to="/contact">Contact</Link></div>
  </div>

export default Home
