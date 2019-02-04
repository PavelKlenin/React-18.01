import React from 'react';
import {Link} from 'react-router';

import style from '../style/Comment.css';

class Comment extends React.Component {
    render () {
        return (
            <div className={style.comment}>
                <p 
                    className={style.commentBody}>
                    {this.props.body}
                </p>
                {(window.location.pathname != `/blogs/${this.props.postId}`) && 
                    <p className={style.commentTo}>
                        to&nbsp;
                        <Link 
                            className={style.commentLink} 
                            to={`/blogs/${this.props.postId}`}>
                            blog
                        </Link>
                    </p>
                }
            </div>
        );
    }
}

export default Comment;