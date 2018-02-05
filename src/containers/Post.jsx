import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

import Header from './Header'

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: "foo"};
    fetch("blog/"+this.props.match.params.path).then(x => x.json()).then(x => {this.setState({data: x})})
  }

  render() {
    return (
      <div className={styles.screen}>
        <Header />
        <div className={styles.content}>
          <hr />
          <div className={styles.container}>
            <div className={styles.title}>{this.state.data == "foo" ? "" : this.state.data.data.title}</div>
            <div className={styles.date}>{this.state.data == "foo" ? "" : this.state.data.data.date}</div>
          </div>
          <div className={styles.container} dangerouslySetInnerHTML={{ __html: this.state.data.content }} />
          <hr />
        </div>

      </div>
    );
  }
}

export default Post
