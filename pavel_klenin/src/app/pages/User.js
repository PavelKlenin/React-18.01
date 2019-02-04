import React from 'react';

// this.props.params.blogID
import axios from 'axios';

import UserInfo from '../components/UserInfo';
import Post from '../components/Post';

class Blog extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loadingUser: true,
            loadingPosts: true,
            user: null,
            posts: [],
        }


    }

    render () {
        if (this.state.loadingUser || this.state.loadingPosts) {
            return null;
        }

        const posts = this.state.posts.map((post, index) => {
            return (
                <Post key={index} {...post}/>
            );
        })

        return(
            <div>
                <UserInfo {...this.state.user}/>
                <hr/>
                <h3>{this.state.user.username}'s posts</h3>
                <hr/>
                {posts}
            </div>
        );
    }

    componentDidMount () {
        axios.get(`http://jsonplaceholder.typicode.com/users/${this.props.params.userID}`)
            .then(response => this.setState({
                loadingUser: false,
                user: response.data
            }))
            .catch(error => console.log(error))

        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${this.props.params.userID}`)
            .then(response => this.setState({
                loadingPosts: false,
                posts: response.data
            }))
            .catch(error => console.log(error))
    }

}

export default Blog