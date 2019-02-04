import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Blog from './app/components/Blog'
import WelomeModal from './app/components/WelcomeModal'
import './app/styles/style.css'

const posts = [
    {
        title: 'Заголовок 1',
        postBody: 'Текст поста 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto cum, dolores earum excepturi id, inventore ipsam magnam mollitia optio, provident quas voluptatem! Consequatur cupiditate dignissimos dolorum, perferendis repudiandae sequi!'
    },
    {
        title: 'Заголовок 2',
        postBody: 'Текст поста 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto cum, dolores earum excepturi id, inventore ipsam magnam mollitia optio, provident quas voluptatem! Consequatur cupiditate dignissimos dolorum, perferendis repudiandae sequi!'
    },
    {
        title: 'Заголовок 3',
        postBody: 'Текст поста 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto cum, dolores earum excepturi id, inventore ipsam magnam mollitia optio, provident quas voluptatem! Consequatur cupiditate dignissimos dolorum, perferendis repudiandae sequi!'
    }
];

class App extends React.Component {
    constructor() {
        super();
        // this.state={
        //     'user':'',
        // };
    }

    render() {
        return <div>
            <Blog posts={posts}></Blog>
            <WelomeModal></WelomeModal>
        </div>
    }
}

const app = document.querySelector('#root');


ReactDOM.render(<App/>, app);
