import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class Login extends Component {
	render() {
		return (
				<form method="post">
					 Username: <input type="text" name="user" /><br />
					 Password: <input type="password" name="pass" /><br />
					 <input type="submit" name="submit" value="Войти" />
				</form>
					
			)
	}
}