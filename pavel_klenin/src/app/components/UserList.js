import React from 'react';
import axios from 'axios';

import UserInfo from './UserInfo';

class UserList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            users: [],
        }
    }

    render () {
        if (this.state.loading) {
            return null;
        }

        const users = this.state.users.map((user, index) => {
            return (
                <UserInfo key={index} {...user}/>
            );
        });
        
        return (
            <div>
                <h1>Users</h1>
                {users}
            </div>
        );    
    }

    componentDidMount () {
        axios.get('http://jsonplaceholder.typicode.com/users/')
            .then(response => this.setState({
                loading: false,
                users: response.data
            }))
            .catch(error => console.log(error));
    }
}

export default UserList;