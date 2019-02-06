import React from 'react'
import {Link} from 'react-router'

class Menu extends React.Component {
    render() {
        const name = this.props.name,
        className = 'menu__main'

        return (
            <nav className={`menu ${className}`}>
                <Link to="/" className="menu__link menu__link_main">{name}</Link>
                <ul className={className}>
                    {this.props.children}
                </ul>
            </nav>
        )
    }
}

export default Menu