import React from 'react';
import CommentInfo from '../components/Comment';
import axios from 'axios';

export default class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: null
    };

    axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.params.commentId}`)
    .then(response => {
      this.setState({comment: response.data})
    });
  }

  render() {
    return (
      <div>
        {this.state.comment && <CommentInfo {...this.state.comment}/>}
      </div>
    );
  }
}