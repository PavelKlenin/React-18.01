import React from 'react'
import Post from './Post'

class Blog extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => {
            return <Post key={index} name={item.name} text={item.text} date={item.date} author={item.author}/>
        })
        return (
            <div className="blog">
                {items}
            </div>
        )
    }
}

export default Blog