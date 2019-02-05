import React from 'react'
import PostList from '../components/PostList'

class Posts extends React.Component {
    render() {
        return (
            <>
                {!this.props.children ? <PostList/> : this.props.children}
            </>
        )
    }
}

export default Posts