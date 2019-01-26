import React from 'react';

class Developer extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return <p>Hello {this.props.position} {this.props.name}!</p>;
    }
}

export default Developer;