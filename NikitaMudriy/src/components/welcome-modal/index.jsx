import React, {Component} from 'react';

import './index.scss';

export default class WelcomeModal extends Component {

    state = {
        shown: false
    };

    componentDidMount(){
        this.open();
    }

    open = () => {
        this.setState({
            shown: true
        });
    };

    close = () => {
        this.setState({
            shown: false
        });
    };

    toggle = () => {
        this.setState({
            shown: !this.state.shown
        });
    };

    render(){
        return <div className={`modal fade ${this.state.shown ? 'show shown' : ''}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Welcome</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.close}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Hi there.</p>
                    </div>
                </div>
            </div>
        </div>;
    }

}