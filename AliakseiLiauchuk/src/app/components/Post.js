import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
    render() {
        return (<>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.text}</p>
            <p>by {this.props.item.author}, published on {this.props.item.date}</p>
        </>)
    }
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default Post;