import React from 'react'
import ReactDOM from 'react-dom'
import {Developer} from './Developer'

class App extends React.Component {
    render() {
        const developer = new Developer('Pavel', 23)
        return <div>
            <h1>First react app</h1>
            <p>{developer.sayHi()}</p>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))
