import React from "react";
import { Link } from "react-router";

class Comment extends React.Component {
  render() {
    return (
      <div>
        <div className="card border-secondary mb-3">
          <div className="card-header">
            <Link to={`/comments/${this.props.id}`}>
              Comment #{this.props.id} to the post #{this.props.postId}. (
              {this.props.email})
            </Link>
          </div>
          <div className="card-body text-secondary">
            <h3>{this.props.name}</h3>
            <p>{this.props.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
