import React from 'react'
import {Link} from 'react-router'

class MenuItem extends React.Component {
    render() {
        const {href, active} = this.props,
        title = this.props.children
        return (
            <li className={active ? "menu__item menu__item_active" : "menu__item"}>
                <Link to={href} className="menu__link">{title}</Link>
            </li>
        )
    }
}

export default MenuItem