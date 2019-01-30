import React from 'react';

import style from "../style/Post.css";

class Post extends React.Component {
    render () {
        const post = this.props.post;
        return (
            <div className={style.post}>
                <h2>{post.title}</h2>
                <p className={style.postBody}>{post.postBody}</p>
                <div className={style.postInfo}>
                    <p>{post.date}</p>
                    <p>{post.author}</p>
                </div>
            </div>
        )
    }
}

export default Post;