import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  render() {
    if (this.state.modal) {
      $("#myModal").modal("hide");
      console.log(1);
    } else {
      $("#myModal").modal("show");
      console.log(0);
    }

    return (
      <div className="modal" tabIndex="-1" role="dialog" id="myModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Lorem title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
                optio!
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={$("#myModal").modal("hide")}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      modal: true
    });
  }
}

export default Modal;
