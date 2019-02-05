import React from 'react';
import PostPro from '../components/Post';
import  axios from 'axios';


export default class Post extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            post: null
        }

        /*axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
            .then(response => {
                this.setState({users: response.data})
            });*/
    }

    render() {
        return (
            <div>
                {this.state.post && <PostPro {...this.state.post}/>}
            </div>
        )
    }
}