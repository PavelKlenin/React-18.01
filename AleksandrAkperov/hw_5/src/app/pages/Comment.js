import React from 'react';
import CommentPro from '../components/Comment';
import  axios from 'axios';


export default class Comment extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            comment: null
        }

        /*axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
            .then(response => {
                this.setState({users: response.data})
            });*/
    }

    render() {
        return (
            <div>
                {this.state.comment && <CommentPro {...this.state.comment}/>}
            </div>
        )
    }
}