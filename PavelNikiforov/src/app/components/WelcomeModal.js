import React from 'react'

class WelcomeModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }
        this.close = this.close.bind(this)
    }

    componentDidMount() {
        this.setState({
            modal: true
        })
    }

    close() {
        this.setState({
            modal: false
        })
    }

    render() {
        let modalWindow;
        if (this.state.modal) {
            modalWindow = (<div className="modal__window">
            <div className="modal__text">
                Welcome #username!<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquid voluptatum, libero in dolorem esse soluta, rerum ab blanditiis quis aperiam provident omnis quam accusamus minima aliquam exercitationem, dicta hic.
                <button className="modal__close modal__close_icon" onClick={this.close}>X</button>
                <button className="modal__close modal__close_button" onClick={this.close}>Close</button>
            </div>
        </div>)
        }
        return (
            <>
                {modalWindow}
            </>
        )
    }
}

export default WelcomeModal