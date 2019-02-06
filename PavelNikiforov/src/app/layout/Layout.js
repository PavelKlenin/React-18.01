import React from 'react'
import Menu from '../components/Menu'
import MenuItem from '../components/MenuItem'

class Layout extends React.Component {
	constructor(props) {
		super(props)
		this.name = 'React blog!'
	}

	isActive(href) {
		return window.location.pathname === href
	}

	render() {
		return (
			<>
				<header>
					<div className="container">
						<Menu name={this.name}>
							<MenuItem href="/" active={this.isActive('/')}>
								Main
							</MenuItem>
							<MenuItem href="/users" active={this.isActive('/users')}>
								Users
							</MenuItem>
							<MenuItem href="/posts" active={this.isActive('/posts')}>
								Posts
							</MenuItem>
							<MenuItem href="/comments" active={this.isActive('/comments')}>
								Comments
							</MenuItem>
						</Menu>
					</div>
				</header>
				<div className="container">
					{this.props.children}
				</div>
				<footer>
					<div className="container">
						&copy; 2019
					</div>
				</footer>
			</>
		)
	}
}

export default Layout