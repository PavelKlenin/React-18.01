import React, {Component} from "react";

class WelomeModal extends Component {
    constructor(){
        super();
        this.state={
            modal: false
        };
    }
    componentDidMount(){
        this.setState({
            modal: true

        })
   }

   close(){
       this.setState({
           modal: false

       })
   }
    render() {
        const welcome=this.state.modal? (            <div className='dark'>
            <div className='welcome'>
                <p>Приветствую</p>
                <button onClick={()=>this.close()}>Закрыть</button>
            </div>
        </div>): null;

        return (
            <div>
            {welcome}
            </div>
        )
    }
}


export default WelomeModal;