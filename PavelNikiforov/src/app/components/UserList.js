import React from 'react'
import axios from 'axios'
import User from './User'

class UserList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }

        axios.get('https://jsonplaceholder.typicode.com/users/')
            .then(response => {
                this.setState({ users: response.data })
            })
    }

    render() {
        if (!this.state.users.length) {
            return null;
        }

        const users = this.state.users.map((user, index) => {
            return <User key={index} {...user} />
        })

        return (
            <>
                <h1>Users</h1>
                {users}
            </>
        )
    }
}

export default UserList