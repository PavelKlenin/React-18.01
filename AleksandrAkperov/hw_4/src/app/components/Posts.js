import React from 'react';

class Posts extends React.Component {
    constructor(props){
        super(props);

    }


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