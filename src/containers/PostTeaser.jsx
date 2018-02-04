import React from 'react'
import styles from '../style.sass'

class PostTeaser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.postteaser}>
        <div className={styles.title}>{this.props.post.title}</div>
        <div className={styles.date}>{this.props.post.date}</div>
        <p dangerouslySetInnerHTML={{ __html: this.props.post.preview }} />
      </div>
    );
  }
}

export default PostTeaser
