import React from 'react';
import CommentProfile from '../components/Comment';
import axios from 'axios';

export default class Comment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: null
        };

        axios.get(`https://jsonplaceholder.typicode.com/comment/${this.props.params.commentId}`)
            .then(response => {
                this.setState({post: response.data})
            });
    }

    render() {
        return (
            <div>
                {this.state.comment && <CommentProfile {...this.state.comment}/>}
            </div>
        );
    }
}