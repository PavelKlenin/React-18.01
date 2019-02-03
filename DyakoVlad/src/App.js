import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Menu from './Menu'

class App extends React.Component {

    render() {
        const items = [
            {href: '/', title: 'Главная'},
            {href: '/about', title: 'О нас'},
            {href: '/service', title: 'Услуги'},
            {href: '/contacts', title: 'Контакты'}
        ];

        return (
            <div class="components">
                <Menu items={items}/>
                <Login/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));