import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app/components/App';
import {BrowserRouter, HashRouter} from 'react-router-dom'


ReactDOM.render(
<BrowserRouter>
<App/>
</BrowserRouter>, 
document.querySelector('#root'));