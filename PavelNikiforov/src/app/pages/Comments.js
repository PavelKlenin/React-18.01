import React from 'react'
import CommentList from '../components/CommentList'

class Comments extends React.Component {
    render() {
        console.log(this)
        return (
            <>
                {!this.props.children ? <CommentList/> : this.props.children}
            </>
        )
    }
}

export default Comments