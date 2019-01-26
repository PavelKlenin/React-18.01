import React from 'react';

import Developer from 'developer';

class App extends React.Component {
    render() {
        return <main className="main container my-3">
            <header className="header my-3">
                <h1 className="h1">ReactJS</h1>
                <h2 className="h2">Домашнее задание 2</h2>
            </header>
            <div className="content my-3">
                <Developer name={'Max'} position={'programmer'} />
            </div>
            <footer className="footer my-3">

            </footer>
        </main>;
    }
}

export default App;