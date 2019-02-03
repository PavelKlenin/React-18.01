import React from 'react';
import ReactDOM from 'react-dom';

import App from 'app';

import 'bootstrap/scss/bootstrap.scss';

ReactDOM.render(<main className="main container my-3">
    <header className="header my-3">
        <h1 className="h1">ReactJS</h1>
        <h2 className="h2">Домашнее задание 4</h2>
    </header>
    <div className="content my-3">
        <App />
    </div>
    <footer className="footer my-3">

    </footer>
</main>, document.getElementById('app'));
