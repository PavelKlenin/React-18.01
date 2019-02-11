import React from 'react'
import {Link} from 'react-router'

class Comment extends React.Component {
    render() {
        const {id, name, email, body} = this.props

        return (
            <div className="card">
                <div className="card__heading">
                    <Link to={`/comments/${id}`} className="card__heading_link">
                        {name}
                    </Link>
                </div>
                <div className="card__text">
                    <p>{body}</p>
                    <p>by {email}</p>
                </div>
            </div>
        )
    }
}

export default Comment