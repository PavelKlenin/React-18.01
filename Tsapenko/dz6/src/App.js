import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import Layout from "./app/layouts/Layout";

import MainPage from "./app/pages/Main";
import Users from "./app/pages/Users";
import User from "./app/pages/User";
import Posts from "./app/pages/Posts";
import PageNotFound from "./app/pages/PageNotFound";

const app = document.querySelector('#root');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={MainPage}/>
      <Route path="users" component={Users}>
        <Route path=":userId" component={User}/>
      </Route>
      <Route path="posts" component={Posts}/>
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>,
app);