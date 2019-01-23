import React from 'react';

import Developer from 'developer';

class App extends React.Component {
    render() {
        return <div>
            <h1>Первое приложение на React</h1>
            <Developer name={'Max'} position={'programmer'} />
        </div>;
    }
}

export default App;