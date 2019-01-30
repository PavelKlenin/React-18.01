import React from 'react';

import Post from './Post';


class Blog extends React.Component {
    render () {
        const blog = this.props.posts.map((post, index) => {
            return (
                <Post key={index} post={post}/>
            );
        });
        
        return (
            <>
                {blog}
            </>
        );    
    };
}

export default Blog;