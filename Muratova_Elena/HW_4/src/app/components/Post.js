import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts
    }
  }

  addPost() {
    console.log("Добавление поста");
    console.log(this);
    
    this.myRef = React.CreateRef();
    const titlePost = this.myRef.current.value;
    const posts = [...this.state.posts, titlePost];
    this.setState({posts});
  }

  render() {
    return (
      <div>
        <div>{this.props.posts}</div>
        <h3>Добавить новый пост</h3>
        <p>
          <b>Тема поста</b>
          <br />
          <input ref={this.myRef} type="text" size="40" />
        </p>
        
        <button onClick={this.addPost.bind(this)}>Отправить</button>
      </div>
    );
  }
}

export default Post;