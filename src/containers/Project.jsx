import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

import Header from './Header'
import history from '../history'

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: "foo"};
    fetch("projects/"+this.props.match.params.path).then(x => x.json()).then(x => {this.setState({data: x})})
  }

  render() {
    document.title = this.state.data == "foo" ? "" : this.state.data.data.title;
    return (
      <div className={styles.screen}>
        <div className={styles.content}>
          <hr />
          <hr />
          <div className={styles.container}>
            <div className={styles.title} style={{ 'margin-bottom': '1.2em'}}>{this.state.data == "foo" ? "" : this.state.data.data.title}</div>
          </div>
          <div className={styles.container} dangerouslySetInnerHTML={{ __html: this.state.data.content }} />
          <hr />
        </div>

      </div>
    );
  }
}

export default Project
