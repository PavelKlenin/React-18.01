import React from 'react';

export default class Post extends React.Component {
    render() {
        return (
            <div className='post container'>
                <h1>{this.props.children}</h1>
                <p>{this.props.body}</p>
                <p className='author'>{this.props.author} at {this.props.dateOfPublication}</p>
                <hr/>
            </div>
        )
    }
}