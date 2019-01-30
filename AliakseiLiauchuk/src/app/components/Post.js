import React from 'react';

class Post extends React.Component {
    render() {
        return (<>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.text}</p>
            <p>by {this.props.item.author}, published on {this.props.item.date}</p>
        </>)
    }
}

export default Post;