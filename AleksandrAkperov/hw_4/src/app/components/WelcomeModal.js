import React from 'react';
import Blog from "./Blog";


 class WelcomeModal extends React.Component {
    constructor(props){
        super(props);
        console.log('сработал метод constructor ');

    }

    render(){
        console.log('сработал метод render');
        return (
            <div>
                -
            </div>

        )
    }

    componentDidMount (){
        alert('добрались до метода componentDidMount, Вот теперь привет');
    }
}

export default WelcomeModal

