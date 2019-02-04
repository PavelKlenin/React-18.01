import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './app/layouts/Layout';
import MainPage from './app/components/Main';
import About from './app/components/About';
import Contacts from './app/components/Contacts';

ReactDOM.render (
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={MainPage} />
            <Route path="about" component={About} />
            <Route path="contacts" component={Contacts}/>
        </Route>
    </Router>
    ,document.getElementById("root"));


{/*
<Layout>
    <About/>
    <Contacts/>
</Layout>*/}
