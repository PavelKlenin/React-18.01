import React from 'react';


 class WelcomeModal extends React.Component {
    constructor(props){
        super(props);
        alert('сработал метод constructor ');
    }

    render(){
        alert('сработал метод render');
        return(
            <div>
                -
            </div>
        )
    }

    componentDidMount (){
        alert('добрались до метода componentDidMount, АУЕ');
    }
}

export default WelcomeModal