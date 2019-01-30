import React from 'react';
import Post from './Post';

class Blog extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => {
            return <Post item={item} ></Post>
        });
        return (
            <>
                {items}
            </>
        )
    };
}

export default Blog;