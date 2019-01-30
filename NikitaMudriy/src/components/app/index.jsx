import React, {Component} from 'react';

import WelcomeModal from 'welcome-modal';
import Blog from 'blog';

import data from './data';

export default class App extends Component {
    render(){
        return <>
            <WelcomeModal />
            <Blog posts={data} />
        </>;
    }
}