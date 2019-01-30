import React, {Component} from 'react';

import Post from 'post';
import Form from 'form';

export default class Blog extends Component {

    static defaultProps = {
        posts: []
    };

    state = {
        posts: []
    };

    constructor(props, context, updater){
        super(props, context, updater);

        this.state = {
            posts: props.posts.map(post => {
                return {...post, ...{
                    date: new Date(post.date)
                }};
            })
        }
    }

    addPost = post => {
        this.setState({
            posts: [...this.state.posts, post]
        });
    };

    render(){
        return <>
            <div className="list-group mt-5">
                {this.state.posts.sort((a, b) => b.date - a.date).map((post, i) => <div key={i} className="list-group-item">
                    <Post {...post} />
                </div>)}
            </div>
            <Form onSubmit={this.addPost} />
        </>;
    }

}