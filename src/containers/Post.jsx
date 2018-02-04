import React from 'react'
import styles from '../style.sass'

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: {}};
    fetch('blog/racket-io.md').then(x => x.json()).then(x => {this.setState({text: x.content})})
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>Have some text:</p>
        <p dangerouslySetInnerHTML={{ __html: this.state.text }} />
      </div>
    );
  }
}

export Post
