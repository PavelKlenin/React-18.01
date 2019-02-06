import React from "react";
import axios from "axios";
import Comment from "../comment";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(response => {
        this.setState({ comment: response.data });
      });
  }

  render() {
    if (!this.state.comment.length) {
      return null;
    }

    const comments = this.state.comment.map((comment, index) => {
      return <Comment key={index} {...comment} />;
    });

    return (
      <div>
        <h1>Комметарии</h1>
        {comments}
      </div>
    );
  }
}

export default CommentList;
