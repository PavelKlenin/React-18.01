import React from 'react';

class Posts extends React.Component {
    constructor(props){
        super(props);

    }


    render () {
        return (
            <div>
                <p>
                    {this.props.title}
                    {this.props.text}
                    {this.props.date}
                </p>
            </div>

            )

    }



}

export default Posts