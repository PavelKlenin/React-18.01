import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';
import './app/styles/style.css';

class App extends React.Component{
    render() {
        const blogPosts = [
            {title: "First", postBody: "Sometimes it just takes a moment to forget a life, but sometimes life is not enough to forget for a moment."},
            {title: "Second", postBody: "No one ever told me I was pretty when I was a little girl. All little girls should be told they're pretty, even if they aren't."},
            {title: "Third", postBody: "The greatest mistake you can make in life is to be continually fearing you will make one."},
            {title: "Fourth", postBody: "If those aren't tears of happiness, please stop crying."}
        ]

        return (<div>
            <h1>Blog quotes</h1>
            <Blog titleBlog="Read me" items={blogPosts}/>
            <WelcomeModal titleLogin="Hello" />
        </div>);
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));