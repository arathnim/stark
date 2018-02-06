import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

class PostTeaser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

        <div className={styles.postteaser}>
          <Link to={"/blog/"+this.props.post.path}>
            <div className={styles.title}>{this.props.post.title}</div>
          </Link>
          <div className={styles.date}>{this.props.post.date}</div>
          <p dangerouslySetInnerHTML={{ __html: this.props.post.preview }} />
        </div>

    );
  }
}

export default PostTeaser
