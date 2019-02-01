import React from 'react';
import Posts from "./Posts";



class Blog extends React.Component() {
        constructor (props) {
            super(props);
    }



    render() {

        const posts = this.props.pos.map((pos, index) => {
            return <Posts key={index}>title={pos.title} text = {pos.text} date = {pos.date} </Posts>
        });

        return (
            <div>
                {posts}
            </div>
        )

     }

}


export default Blog