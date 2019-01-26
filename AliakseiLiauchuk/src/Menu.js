import React from 'react';

class Menu extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => {
            return <li><a href={item.href}>{item.name}</a></li>
        });
        

        return <div id='menu'>
            <h2>Menu</h2>
            <ul>
                {items}
            </ul>
        </div>   
    }
}

export default Menu;