import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';
import './app/styles/modal.css'
import './app/styles/modal_button.sass'

class App extends React.Component {
    render() {
        const blogInfo = [
            {
                title: 'First article',
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod, ligula id efficitur interdum, 
                velit est placerat orci, sed eleifend arcu libero ac quam. Sed at molestie mi. Mauris interdum lacus eget ipsum 
                consequat, ac rhoncus neque sodales. Etiam ut leo mi. Orci varius natoque penatibus et magnis dis parturient montes, 
                nascetur ridiculus mus. Pellentesque sollicitudin sapien a ex hendrerit, in rutrum sapien tristique. Maecenas eu suscipit 
                lacus, ac posuere tellus. Maecenas luctus magna nec sapien luctus, egestas hendrerit ipsum commodo. Donec at est a mauris 
                commodo tincidunt. Integer eget justo nisl. Nullam quis consequat velit, eget iaculis enim. Aenean rhoncus vehicula 
                tristique.`,
                date: '2018.12.01',
                author: 'Alex'
            },
            {
                title: 'Second article',
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod, ligula id efficitur interdum, 
                velit est placerat orci, sed eleifend arcu libero ac quam. Sed at molestie mi. Mauris interdum lacus eget ipsum 
                consequat, ac rhoncus neque sodales. Etiam ut leo mi. Orci varius natoque penatibus et magnis dis parturient montes, 
                nascetur ridiculus mus. Pellentesque sollicitudin sapien a ex hendrerit, in rutrum sapien tristique. Maecenas eu suscipit 
                lacus, ac posuere tellus. Maecenas luctus magna nec sapien luctus, egestas hendrerit ipsum commodo. Donec at est a mauris 
                commodo tincidunt. Integer eget justo nisl. Nullam quis consequat velit, eget iaculis enim. Aenean rhoncus vehicula 
                tristique.`,
                date: '2018.12.02',
                author: 'Lev'
            },
            {
                title: 'Third article',
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod, ligula id efficitur interdum, 
                velit est placerat orci, sed eleifend arcu libero ac quam. Sed at molestie mi. Mauris interdum lacus eget ipsum 
                consequat, ac rhoncus neque sodales. Etiam ut leo mi. Orci varius natoque penatibus et magnis dis parturient montes, 
                nascetur ridiculus mus. Pellentesque sollicitudin sapien a ex hendrerit, in rutrum sapien tristique. Maecenas eu suscipit 
                lacus, ac posuere tellus. Maecenas luctus magna nec sapien luctus, egestas hendrerit ipsum commodo. Donec at est a mauris 
                commodo tincidunt. Integer eget justo nisl. Nullam quis consequat velit, eget iaculis enim. Aenean rhoncus vehicula 
                tristique.`,
                date: '2018.12.03',
                author: 'Sergey'
            }
        ]      
        return (<>
            <Blog items={blogInfo}/>
            <WelcomeModal />
        </>);
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));