import React from 'react'
import {Link} from 'react-router'

class User extends React.Component {
    render() {
        const {id, username, name, email, phone, website} = this.props

        return (
            <div className="card">
                <div className="card__heading">
                    <Link to={`/users/${id}`} className="card__heading_link">
                        {username}
                    </Link>
                </div>
                <div className="card__text">
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{website}</p>
                </div>
            </div>
        )
    }
}

export default User