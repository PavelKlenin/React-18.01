import React from 'react';
import Post from './Post';

export default class Blog extends React.Component {
    render() {
        const items = this.props.items.map((item, index)=>{
            return <Post key={index} title={item.title} postBody={item.postBody}/>
        });

        return <div className="flex">
            <h2>{this.props.titleBlog}</h2>
            {items}
        </div>
    }
}