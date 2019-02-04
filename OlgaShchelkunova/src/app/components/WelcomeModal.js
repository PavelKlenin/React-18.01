import React from 'react';

export default class WelcomeModal extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            display: false
        }
    }

    render() {
        let modalBox;

        if(this.state.display) {
            modalBox = <div className="modalWindow">
                {/*<h3 className="close">X</h3>*/}
                <h3 className="close" onClick={()=>{
                    this.setState({display: !this.state.display})
                }}>X</h3>
                <p className="textModal">Hello, world! You are waiting for a train. A train that will take you far away.
                You know where you hope this train will take you, but you don't know for sure.
            But it doesn't matter because you will be together.</p>
            </div>
        }

        return <div>
            {modalBox}
        </div>
    }

    componentDidMount() {

        this.setState({display: true})
    }


}