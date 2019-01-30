import React, {Component} from 'react';

export default class WelcomeModal extends Component {
    render() {
        return <div className="modal-window-wrapper mt-5">
            <div className="modal-window__window">
                <p className="modal-window__text">some text will appear here some text will appear here some text will
                    appear here some text will appear here some text will appear here some text will appear here some
                    text will appear here some text will appear here </p>
                <button type="submit" className=' btn-default btn btn-lg btn-dark'>Close me</button>
            </div>
        </div>;
    }
}