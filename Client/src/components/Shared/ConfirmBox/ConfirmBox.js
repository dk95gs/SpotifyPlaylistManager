import React from 'react';
import {Modal, Button} from 'react-bootstrap';
const ConfirmBox = (props) =>{
    return (
        <Modal show={props.show} onHide={props.handleCloseConfirm}>
        <Modal.Header closeButton>
            <Modal.Title>{props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          {props.cancelBtnShow ? <Button variant="secondary" onClick={props.handleCloseConfirm}>Cancel</Button> : <div></div>}
          
          <Button variant="primary" onClick={props.handleConfirm || props.handleCloseConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    );
}
export default ConfirmBox;