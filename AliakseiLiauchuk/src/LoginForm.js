import React from 'react';
import ReactDOM from 'react-dom';

class LoginForm extends React.Component {
    render() {
        return <div id='loginForm'>
            <form>
                <label><input type='text' name="username"/>Enter username</label>
            </form>
            </div>
        
    }
}

export default LoginForm;