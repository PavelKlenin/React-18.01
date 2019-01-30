import React from 'react';

import styles from '../style/WelcomeModal.css';


class WelcomeModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            modal: false,
        }
        this.sayWelcome = this.sayWelcome.bind(this);
    }

    sayWelcome () {
        this.setState({modal:true});
    }

    render () {
        let greeting;
        if (this.state.modal) {
            greeting = (
                <>
                    <div className = {styles.modal}>
                        <p>Welcome</p>
                        <button 
                            onClick = {() => {this.setState({modal:false})}} 
                            className={styles.closeBtn}>
                            &#10006;
                        </button>
                    </div>   
                    <div className = {styles.shadow}></div>
                </>
            );
        }

        return (            
            <div className = {styles.welcome}>
                {greeting}
            </div>
        );
    }

    componentDidMount () {
        setTimeout(this.sayWelcome, 1000);
    }
}

export default WelcomeModal;