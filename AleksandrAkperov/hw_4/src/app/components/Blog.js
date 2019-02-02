import React from 'react';
import Posts from "./Posts";



class Blog extends React.Component {
        constructor (props) {
            super(props);
    }



    render() {

        const posts = this.props.posts.map((post, index) => {
            console.log(post);

            return <Posts key={index}>{post.title}{post.text}{post.date}</Posts>
        });



        return (
            <div>
                {posts}
            </div>
        )

     }

}


export default Blog