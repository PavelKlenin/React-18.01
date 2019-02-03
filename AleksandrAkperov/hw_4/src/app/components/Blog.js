import React from 'react';
import Posts from "./Posts";



class Blog extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                posts: this.props.postsel
            }
    }



    render() {

        const blog = this.state.posts.map((post, index) => {
            console.log(blog);
            console.log(this);
            return (
                <div className="post">
                    <p>{post.title}</p>
                    <Posts key={index}>{post.text}</Posts>
                    <p>{post.date}</p>
                    <hr/>
                </div>
            )
        });



        return (
            <div>
                {blog}
            </div>
        )

     }

}


export default Blog