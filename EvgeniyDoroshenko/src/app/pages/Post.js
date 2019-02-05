import React from "react";
import PostCard from "../components/post";
import axios from "axios";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    };
    console.log(this);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
      .then(response => {
        this.setState({ post: response.data });
      });
  }
  render() {
    return <div>{this.state.post && <PostCard {...this.state.post} />}</div>;
  }
}

export default Post;
