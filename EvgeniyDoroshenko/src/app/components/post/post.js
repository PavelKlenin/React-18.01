import React from "react";
import { Link } from "react-router";

class Post extends React.Component {
  render() {
    return (
      <div>
        <div className="card border-secondary mb-3">
          <div className="card-header">
            <Link to={`/posts/${this.props.id}`}>{`Пост №${this.props.id}. Пользователь: User#${this.props.userId}`}</Link>
          </div>
          <div className="card-body text-secondary">
            <h3>{this.props.title}</h3>
            <p>{this.props.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
