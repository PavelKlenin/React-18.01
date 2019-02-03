import React from "react";
import Post from "./Post";

class Blog extends React.Component {
  render() {
    const postsList = this.props.postsList;
    let postItems = postsList.map(el => {
      return (
        <Post
          title={el.title}
          dateTime={el.dateTime}
          author={el.author}
          postContent={el.postContent}
        />
      );
    });

    return <div className="blog">{postItems}</div>;
  }
}

export default Blog;
