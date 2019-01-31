
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import Blog from "./app/components/Blog";
import WelcomeModal from "./app/components/WelcomeModal";
import "./app/style/style.css";

class App extends React.Component {
  render() {
    const posts = [
      {
        title: "Первый пост",
        postBody: "Здесь есть текст первого поста",
      },
      {
        title: "Второй пост",
        postBody: "Здесь есть текст второго поста",
      },
      {
        title: "Третий пост",
        postBody: "Здесь есть текст третьего поста",
      }
    ];

    return (
      <div>
        <Blog posts={posts} />
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <App />
    <WelcomeModal />
  </div>,
  document.getElementById("root")
);
