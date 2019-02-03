import React from 'react';
import '../styles/style.css';

class WelcomeModal extends React.Component {
    constructor(props){
        super(props);
        this.state={
            hidenmodal: false
        };

        this.closeWindow = this.closeWindow.bind(this)
    }

    closeWindow () {
        this.setState({
            hidenmodal: false

        })
    }

    componentDidMount(){
        this.setState({
            hidenmodal: true

        })
    }



    render(){
        console.log(this)
        const welcomemodal = this.state.hidenmodal?( <div>
                <div id="myModal" className="modal">
                <div className="modal-content">
                    <span>Наконец-то запилил модальное окно.</span>
                    <button onClick={this.closeWindow}>Close</button>
                </div>
            </div>
            </div> ):null;
        return (
            <div>
                {welcomemodal}
            </div>


        )
    }


}

export default WelcomeModal

