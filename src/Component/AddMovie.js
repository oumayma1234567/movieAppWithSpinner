import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleInput = (element) =>{
    this.setState({
    [element.target.name]: element.target.value
    })
  }
  render() {
    return (
      <div>
        <button className="btn-remove new-movie" onClick={this.toggle}>+</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} color="warning">Add Movie</ModalHeader>
          <ModalBody className="modalbody">
                            <label>Link:</label> <input name="image" onChange={this.handleInput}></input>
                            <label>Title:</label> <input name="title" onChange={this.handleInput} ></input>
                            <label>Descrption:</label> <input name="description" onChange={this.handleInput} ></input>
                            <label>Rate:</label> <input name="rating" onChange={this.handleInput} ></input>     
 </ModalBody>
          <ModalFooter>
            <Button color="warning" onClick={()=>this.props.addMovie(this.state)}>Save</Button>{' '}
            <Button color="warning" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMovie;