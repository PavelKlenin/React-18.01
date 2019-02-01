import React from 'react';
import ReactDOM from 'react-dom';

import Developer from './components/Developer';
import WelcomeModal from './components/WelcomeModal';
import Blog from './components/Blog';
import Texts from './components/Texts';

import style from './style/App.css';

class App extends React.Component {
    render () {
        const posts = new Texts().texts;

        const developer = new Developer();
        developer.showDev();

        return (
            <div className={style.container}>
                <WelcomeModal/>
                <Blog posts={posts}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));


