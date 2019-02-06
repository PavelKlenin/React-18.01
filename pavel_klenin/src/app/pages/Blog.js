import React from 'react';

// this.props.params.blogID
import axios from 'axios';

import Comment from '../components/Comment';
import Post from '../components/Post';

import style from '../style/Blog.css';

class Blog extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loadingPost: true,
            loadingCom: true,
            post: null,
            comments: [],
        }
    }

    render () {
        if (this.state.loadingPost || this.state.loadingCom) {
            return null;
        }

        const comments = this.state.comments.map((comment, index) => {
            return (
                <Comment key={index} {...comment}/>
            );
        })
        return(
            <div>
                <Post {...this.state.post}/>
                <hr/>
                <h3>Comments</h3>
                <hr/>
                {comments}
            </div>
        );
    }

    componentDidMount () {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.params.blogID}`)
            .then(response => this.setState({
                loadingPost: false,
                post: response.data
            }))
            .catch(error => console.log(error))

        axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${this.props.params.blogID}`)
            .then(response => this.setState({
                loadingCom: false,
                comments: response.data
            }))
            .catch(error => console.log(error))
    }
}

export default Blog