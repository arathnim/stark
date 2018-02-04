import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: "foo"};
    fetch("about.json").then(x => x.json()).then(x => {this.setState({data: x})})
}

  render() {
    console.log(this.state)
    return (
      <div>
        <div className={styles.header}>
          <Link to="/">
            <div className={styles.homebuttonspacer}>
              <span className={styles.homebutton}>~</span>
            </div>
          </Link>
        </div>
        <div className={styles.content}>
          <hr />
          <div className={styles.container} dangerouslySetInnerHTML={{ __html: this.state.data.content }} />
          <hr />
        </div>
      </div>
    );
  }
}

export default About
