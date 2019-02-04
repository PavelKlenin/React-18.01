import React from 'react';

import axios from 'axios';

import Comment from '../components/Comment';

class Comments extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            comments: [],
        }
    }

    render () {
        if(this.state.loading) {
            return null;
        }

        const comments = this.state.comments.map((comment, index) => {
            return (
                <Comment key={index} {...comment}/>
            );
        })

        return (
            <div>
                <h1>Comments</h1>
                {comments}
            </div>
        );
    }

    componentDidMount () {
        axios.get('http://jsonplaceholder.typicode.com/comments/')
            .then(response => this.setState({
                loading: false,
                comments: response.data
            }))
            .catch(error => console.log(error))
    }
}

export default Comments;