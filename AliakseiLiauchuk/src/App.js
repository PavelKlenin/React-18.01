import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return <div>
            <form>
                <input type='text' name="username"/>
                <label htmlFor="username">Enter username</label>
            </form>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));