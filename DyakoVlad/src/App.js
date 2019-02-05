import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';

import './app/styles/style.css';
import './app/styles/bootstrap.min.css';


class App extends React.Component {

    render() {
        const posts = [
            {title: faker.lorem.sentence(), body: faker.lorem.paragraphs(), author: faker.name.findName(), dateOfPublication: faker.date.recent()},
            {title: faker.lorem.sentence(), body: faker.lorem.paragraphs(), author: faker.name.findName(), dateOfPublication: faker.date.recent()},
            {title: faker.lorem.sentence(), body: faker.lorem.paragraphs(), author: faker.name.findName(), dateOfPublication: faker.date.recent()},
            {title: faker.lorem.sentence(), body: faker.lorem.paragraphs(), author: faker.name.findName(), dateOfPublication: faker.date.recent()},
            {title: faker.lorem.sentence(), body: faker.lorem.paragraphs(), author: faker.name.findName(), dateOfPublication: faker.date.recent()}
        ];

        return (
            <div className="components">
                <WelcomeModal/>
                <Blog posts={posts}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));