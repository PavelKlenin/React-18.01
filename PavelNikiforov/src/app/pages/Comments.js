import React from 'react'
import CommentList from '../components/CommentList'

class Comments extends React.Component {
    render() {
        return (
            <>
                {!this.props.children ? <CommentList/> : this.props.children}
            </>
        )
    }
}

export default Comments