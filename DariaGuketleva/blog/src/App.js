import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, IndexRoute, browserHistory,} from 'react-router';
// import './app/styles/style.css';

import Layout from './app/layouts/Layout.js';
import Main from './app/pages/Main';
import Users from './app/pages/Users';
import User from './app/pages/User';
import PageNotFound from './app/pages/PageNotFound'

class App extends React.Component {

    render() {
        return <Router history={browserHistory}>
            <Route path='/' component={Layout}>
                <IndexRoute component={Main}/>
                <Route path='users' component={Users}>
                    <Route path=':userID' component={User}/>
                </Route>
                <Route path="*" component={PageNotFound}/>
            </Route>
        </Router>
    }
}

const app = document.querySelector('#root');


ReactDOM.render(<App/>, app);
