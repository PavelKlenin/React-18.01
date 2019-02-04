import React from 'react'
import ReactDOM from 'react-dom'

// import Menu from './app/components/Menu'
// import FormLogin from './app/components/FormLogin'

import Blog from './app/components/Blog'
import WelcomeModal from './app/components/WelcomeModal'

import './app/scss/style.scss';

class App extends React.Component {
    renderLesson3() {
        const menuItems = [
            {href: "/", title: "Main page"},
            {href: "/contacts", title: "Contacts"}
        
        ],
        name = "main"
        return
        (
            <React.Fragment>
                <Menu items={menuItems} name={name}/>
                <FormLogin/>
            </React.Fragment>
        )
    
    }

    render() {
        const posts = [
            {
                name: 'First Lorem',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eveniet in totam porro numquam voluptate nam? Odit enim perferendis nemo et voluptate laborum rerum, hic officia molestiae? Laboriosam, eaque maxime?',
                date: new Date(2019, 1, 1),
                author: 'John Doe'
            },
            {
                name: 'Second Lorem',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus recusandae tenetur debitis. Mollitia fugiat autem, odit, incidunt corrupti maxime, id voluptatibus dolores unde at harum sint cumque quis saepe. Autem.',
                date: new Date(2019, 0, 20)
            },
            {
                name: 'Third Lorem',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit illo magnam quidem, sed quas consectetur numquam ab nisi iusto fuga, aut iste aperiam rerum maxime enim. Quas, expedita vitae. Geronimo!',
                author: 'Matt Smith'
            },
            {
                name: 'Fourth Lorem',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam dolore facilis tempore vel? Officia tempore, voluptatum similique repellendus quisquam, labore quae quas aliquam aperiam expedita est repellat magni animi eaque?'
            }
        ]

        return (
            <>
                <WelcomeModal />
                <Blog items={posts}/>
            </>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))