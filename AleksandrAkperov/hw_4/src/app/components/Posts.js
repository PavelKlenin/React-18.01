import React from 'react';

class Posts extends React.Component {
    constructor(props){
        super(props);

    }


    render () {
        return (
            <div>
                <p>
                    console.log({this.props.children})
                    {/*{this.props.text}
                    {this.props.date}*/}
                </p>
            </div>

            )

    }



}

export default Posts