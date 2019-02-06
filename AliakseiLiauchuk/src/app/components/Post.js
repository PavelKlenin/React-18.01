import React from 'react';
import {Link} from 'react-router-3';

export default class Post extends React.Component {
  render() {
    return (

        <div className="card border-secondary mb-3">
          <div className="card-header">
          <Link to={`/posts/${this.props.id}`}>
          {this.props.id}
          </Link>
          </div>
          <div className="card-body text-secondary">
            <p>{this.props.title}</p>
            <p>{this.props.body}</p>
          </div>
        </div>
    );
  }
}