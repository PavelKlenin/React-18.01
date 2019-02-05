import React from 'react';
import {Link} from 'react-router';

export default class Comment extends React.Component {
    render() {
        return (

            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <p>{this.props.name}</p>
                </div>
                <div className="card-body text-secondary">
                    <p>{this.props.body}</p>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}