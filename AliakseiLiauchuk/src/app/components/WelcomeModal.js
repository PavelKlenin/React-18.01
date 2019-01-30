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
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: '9999',
            opacity: 1,
            animation: 'show .5s ease',
            overflowX: 'hidden',
            overflowY: 'auto',
        };

        let modaltext = {
            width: '100%',
            backgroundColor: '#fff',
            boxShadow: [0, 0, '0.625rem', 'rgba(0, 0, 0, 0.2)'],
    
            '@media (min-width: 576px)': {
                width: '32rem',
            },
        };

        let closeButton = {
            position: 'fixed',
            top: 0,
            right: 0,
            background: '#fff',
            width: '2.5rem',
            height: '2.5rem',
            padding: 0,
            border: 0,
            cursor: 'pointer',
            outline: 0,
            boxShadow: [0, 0, '0.625rem', 'rgba(0, 0, 0, 0.2)'],
        
            '&:before, &:after': {
              content: '""',
              position: 'relative',
              top: '1.2rem',
              left: '0.25rem',
              width: '2rem',
              height: '0.1rem',
              backgroundColor: '#888',
            },
        
            '&:before': {
              transform: 'rotate(45deg)',
            },
        
            '&:after': {
              transform: 'rotate(-45deg)',
            },
        
            '&:hover:before, &:hover:after': {
              backgroundColor: '#444',
            },
        };
        
        return (<div style={modalover}>
            <div style={modaltext}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius vitae neque quis lacinia. 
                Donec tristique venenatis orci sit amet tempor. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Fusce id enim blandit, tincidunt dui at, consequat dui. Proin tincidunt gravida pharetra. 
                Suspendisse condimentum, tellus volutpat lobortis rutrum, arcu dui accumsan est, non viverra mauris diam sed augue. 
                Aenean sed tincidunt libero, in gravida est. Proin ac orci dignissim, dictum sem ut, bibendum odio. 
                Suspendisse sed arcu eu turpis dignissim dictum vel sit amet nisi. Quisque sed semper odio. 
                Morbi at turpis ac velit semper posuere. Vestibulum vitae enim dui.
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