import React from 'react';
import Posts from "./Posts";



class Blog extends React.Component() {
        constructor (props) {
            super(props);
    }



    render() {

        const posts = this.props.posts.map((post, index) => {
            return <Posts>title={post.title} text = {post.text} date = {post.date} </Posts>
        }


        return (
            <div>
                {posts}
            </div>
        )

     }

}


export default Blog