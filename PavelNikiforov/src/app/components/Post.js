import React from 'react'

class Post extends React.Component {
    render() {
        const {name, text, date, author} = this.props,
        localeOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        },
        authorLink = <>by <a href="#" className="post__author">{author}</a></>,
        dateLine = (date || author) && <div className="post__dateline">{date && date.toLocaleString('en-US', localeOptions)} {author && authorLink}</div>

        return (
            <div className="post">
                <h2 className="post__heading">{name}</h2>
                <p className="post__text">{text}</p>
                {dateLine}
            </div>
        )
    }
}

export default Post