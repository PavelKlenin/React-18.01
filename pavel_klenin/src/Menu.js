import React from 'react';

import styles from './Menu.css';


class Menu extends React.Component {
    render () {
        const menu = this.props.items.map((prop, index) => {
            return (
                <li key={index}>
                    <a href={prop.href}>{prop.title}</a>
                </li>
            );
        });
        
        return (
            <div>
                <ul className={styles.menu}>{menu}</ul>
            </div>
        );    
    };
}

export default Menu;