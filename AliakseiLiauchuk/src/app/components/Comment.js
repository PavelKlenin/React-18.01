import React from 'react';
import {Link} from 'react-router-3';

export default class Comment extends React.Component {
  render() {
    return (

        <div className="card border-secondary mb-3">
          <div className="card-header">
          <Link to={`/comments/${this.props.id}`}>
          {this.props.id}
          </Link>
          </div>
          <div className="card-body text-secondary">
            <p>{this.props.name}</p>
            <p>{this.props.email}</p>
            <p>{this.props.body}</p>
          </div>
        </div>
    );
  }
}