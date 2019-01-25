import React from 'react';
import ReactDOM from 'react-dom';
/*import Developer_1 from './Developer'*/

class App extends React.Component {
    render(){
        return <div>
            <h1>Первое приложение на React</h1>
            <p>Hello React</p>

        </div>


        /*<Developer_1/>*/
    }
}

App = ReactDOM.render(<app/>, document.getElementById('root' ));


export  default App;
