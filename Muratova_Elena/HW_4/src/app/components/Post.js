import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts
    }
    this.myRef = React.createRef(); 
    this.myRefBody = React.createRef();
  }

  addPost() { 
    console.log("Добавление поста");
    
    let titlePost = this.myRef.current.value;
    let BodyPost = this.myRefBody.current.value;
    this.myRefBody.current.value = '';
    this.myRef.current.value = '';
    let newPost = <div> 
        <h1>{titlePost}</h1>
        <p>{BodyPost}</p>
        <br />
        <hr />
    </div>;
    const posts = [...this.state.posts, newPost];
    this.setState({posts});
  }

  render() {
    console.log("render");
    return (
      <div>
        <div>{this.state.posts}</div>
        <h3>Добавить новый пост</h3>
        <p>
          <b>Тема поста</b>
          <br />
          <input ref={this.myRef} type="text" size="40" />
        </p>
        
        <p>Текст поста </p>
        <textarea  ref={this.myRefBody} rows="10" cols="45" name="text" />
        <br />
        <button onClick={this.addPost.bind(this)}>Отправить</button>
      </div>
    );
  }
}

export default Post;