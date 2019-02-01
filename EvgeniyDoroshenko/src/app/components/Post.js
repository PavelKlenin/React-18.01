import React from "react";

class Post extends React.Component {
  render() {
    const title = this.props.title;
    const author = this.props.author;
    const dateTime = this.props.dateTime;
    const postContent = this.props.postContent;

    const AuthorLink = () => {
      return <a href="#author">{author}</a>;
    };

    return (
      <div className="blog__post jumbotron">
        <h2>{title}</h2>
        <p>{postContent}</p>
        <p>
          {`${dateTime} by `} <AuthorLink />
        </p>
      </div>
    );
  }
}

export default Post;
