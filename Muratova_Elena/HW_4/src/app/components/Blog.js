
import React from "react";
import Post from "./Post";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts
    };
  }

  render() {
    const posts = this.props.posts.map((post, index) => {
      return (
        <div key={index}>
          <h1>{post.title}</h1>

          <br />
          <hr />
        </div>
      );
    });

    return (
      <div>
        <Post posts={posts} />
      </div>
    );
  }
}

export default Blog;







// class Menu extends React.Component {
//     render() {
//         const items = this.props.items.map((item, index) => {
//             return <li key={index}><a href={item.href}>{item.title}</a></li>
//         });

//         return (
//             <div>
//                 <h2> {this.props.titleMenu}</h2>
//                 <header className = "main-menu">
//                     <ul>
//                         {items}
//                     </ul>
//                 </header>
//             </div>
//         );
//       }  
// }

// export default Menu;