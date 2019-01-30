import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';

class App extends React.Component {
    render() {       
        return (<>
            <Blog/>
            <WelcomeModal />
        </>);
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));