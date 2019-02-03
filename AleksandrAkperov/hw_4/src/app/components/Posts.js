import React from 'react';

class Posts extends React.Component {
    render () {
        console.log(this.props);
        return (
            <div>
                <p >
                    {this.props.children}
                </p>
            </div>

            )

    }



}

export default Posts