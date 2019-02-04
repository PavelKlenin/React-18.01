import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

import Developer from './app/components/Developer';
import Layout from './app/layouts/Layout';

import Main from './app/pages/Main';
import Blogs from './app/pages/Blogs';
import Blog from './app/pages/Blog';
import Comments from './app/pages/Comments';
import Users from './app/pages/Users';
import User from './app/pages/User';
import PageNotFound from './app/pages/PageNotFound';

class App extends React.Component {
    render () {
        const developer = new Developer();
        developer.showDev();

        return (
            <Router history={browserHistory}>
                <Route path='/' component={Layout}>
                    <IndexRoute component={Main}/>
                    <Route path='blogs' component={Blogs}>
                        <Route path=':blogID' component={Blog}/>
                    </Route>
                    <Route path='comments' component={Comments}/>
                    <Route path='users' component={Users}>
                        <Route path=':userID' component={User}/>
                    </Route>
                    <Route path='*' component={PageNotFound}/>
                </Route>
            </Router>
        );
    }
}

const app = document.querySelector('#root');

ReactDOM.render(<App/>, app);


