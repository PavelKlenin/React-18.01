import React from 'react'
import {Link} from 'react-router'

class Post extends React.Component {
    render() {
        const {id, title, body} = this.props

        return (
            <div className="card">
                <div className="card__heading">
                    <Link to={`/posts/${id}`} className="card__heading_link">
                        {title}
                    </Link>
                </div>
                <div className="card__text">
                    <p>{body}</p>
                </div>
            </div>
        )
    }
}

export default Post