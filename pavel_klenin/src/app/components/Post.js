import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

import style from '../style/Post.css'


class Post extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            user: null,
        }
    }

    render () {
        if (this.state.loading) {
            return null;
        }

        return (
            <div className={style.post}>
                {
                    (window.location.pathname != `/blogs/${this.props.id}`) ?
                    (<h2 className = {style.postTitle}>
                        <Link to={`/blogs/${this.props.id}`}>
                            {this.props.title}
                        </Link>
                    </h2>) :
                    (<h2 className = {style.postTitle}>
                        {this.props.title}
                    </h2>)
                }
                <hr/>
                <p className = {style.postBody}>{this.props.body}</p>
                {
                    (window.location.pathname != `/users/${this.props.userId}`) &&
                    (<p className = {style.postAuthor}>
                        by&nbsp;
                        <Link to={`/users/${this.props.userId}`}>
                            {this.state.user.name}
                        </Link>
                    </p>)
                }
            </div>
        );
    }

    componentDidMount () {
        axios.get(`http://jsonplaceholder.typicode.com/users/${this.props.userId}`)
            .then(response => this.setState({
                loading: false,
                user: response.data
            }))
            .catch(error => console.log(error))
    }
}

export default Post;