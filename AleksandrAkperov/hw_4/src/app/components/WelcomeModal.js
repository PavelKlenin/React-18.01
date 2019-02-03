import React from 'react';



 class WelcomeModal extends React.Component {
    constructor(props){
        super(props);

    }


    CallModal () {
        const Modal = <div>
            <div id="myModal" className="modal" >
                <div className="modal-content">
                    <span className="close">&time</span>
                    <p>Модальное окно</p>
                </div>
            </div>
        </div>;
    }


    render(){
        const rend = "здесь поработал метод  render()"
        return (
               <div>
                   {rend}
               </div>

        )
    }

    componentDidMount (){
        this.CallModal();
    }
}

export default WelcomeModal

