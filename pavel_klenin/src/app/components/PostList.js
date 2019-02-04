import React from 'react';
import axios from 'axios';

import Post from './Post';

class PostList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            posts: [],
        }
    }

    render () {
        if (this.state.loading) {
            return null;
        }

        const posts = this.state.posts.map((post, index) => {
            return (
                <Post key={index} {...post}/>
            );
        });
        
        return (
            <div>
                <h1>Blogs</h1>
                {posts}
            </div>
        );    
    }

    componentDidMount () {
        axios.get('http://jsonplaceholder.typicode.com/posts/')
            .then(response => this.setState({
                loading: false,
                posts: response.data
            }))
            .catch(error => console.log(error));
    }
}

export default PostList;