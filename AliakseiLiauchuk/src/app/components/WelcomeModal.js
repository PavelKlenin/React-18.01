import React from 'react';
import styles from '../styles/modal.css';

class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            modal: false,
        };
    }

    closeModal() {
        this.setState({modal: false})
    }

    render() {
        var shown = {
			display: this.state.modal ? "block" : "none"
        };
        var modalover =   {
            display: this.state.modal ? "flex" : "none",
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            padding: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: '9999',
            opacity: 1,
            animation: 'show .5s ease',
            overflowX: 'hidden',
            overflowY: 'auto',
        };
        
        return (<div style={modalover}>
            <p>some text</p>
            <button type="button" style={shown} onClick={this.closeModal}>
                close
            </button>
        </div>
        )
    }

    componentDidMount() {
        this.setState({modal: true});
      }
}

export default WelcomeModal;