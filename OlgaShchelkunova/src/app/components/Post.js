import React from 'react';

export default class Post extends React.Component {
    render(){
        return <div className="block">
            <p className="titlePost">{this.props.title}</p>
            <p className="bodyPost">{this.props.postBody}</p>
        </div>
    }
}