import React from "react";
import ReactDOM from "react-dom";

import Modal from "./WelcomeModal";
import Blog from "./Blog";

const posts = [
  {
    author: "admin",
    dateTime: "DateTime",
    title: "Lorem post #1",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem laboriosam laudantium quam voluptate! Aspernatur cum ducimus illo nemo quibusdam?"
  },
  {
    author: "admin",
    dateTime: "DateTime",
    title: "Lorem post #2",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam cupiditate dolorum enim esse exercitationem illum magni numquam recusandae suscipit!"
  },
  {
    author: "admin",
    dateTime: "DateTime",
    title: "Lorem post #3",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cupiditate deserunt error excepturi facere provident quasi quibusdam quod recusandae tenetur?"
  },
  {
    author: "admin",
    dateTime: "DateTime",
    title: "Lorem post #4",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet culpa distinctio excepturi iure laudantium minus neque, similique soluta voluptas?"
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Blog postsList={posts} />
        <Modal />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
