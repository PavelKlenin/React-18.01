import React from "react";
import Modal from "react-modal";

class WelcomeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div onLoad={this.openModal}>
        <Modal
          isOpen={this.state.showModal}
          ariaHideApp={false}
          contentLabel="Minimal Modal Example" >
          <p>Вы попали на 4 домашнее задание по курсу React Муратовой Алёны </p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }

  componentDidMount() {
    this.handleOpenModal();
  }
}

export default WelcomeModal;