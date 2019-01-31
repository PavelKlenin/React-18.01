import React from 'react';

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
        let modalover =   {
            display: this.state.modal ? "flex" : "none",
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            padding: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '9999',
            opacity: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
        };

        let closeButton = {
            position: 'relative',
            top: -80,
            right: 0,
            background: '#fff',
            width: '2.5rem',
            height: '2.5rem',
            padding: 0,
            border: 0,
            cursor: 'pointer',
            outline: 0,
            boxShadow: [0, 0, '0.625rem', 'rgba(0, 0, 0, 0.2)'],
        };
        
        return (<div style={modalover}>
            <div className="modalTextStyle">
                <h4>This a welcome window. And I want to welcome you, user, on this Blog webpage. You are welcome</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales enim non sodales pulvinar. 
                Aliquam ultrices in nisl non luctus.</p>
            </div>
            <button style={closeButton} type="button" onClick={this.closeModal}>
                X
            </button>
        </div>
        )
    }

    componentDidMount() {
        this.setState({modal: true});
      }
}

export default WelcomeModal;