import React from 'react';
import {
    Row,
    Col,
    Button,
    Pagination,
    Modal,
    ListGroup
} from 'react-bootstrap';
import './TrackListModal.css';
const TrackListModal = (props) =>{

  const handleModalChange = (uri) =>{
    props.handlePlaylistsModalShow();
    props.updateTrackUri(uri);
    props.handleTrackListModalClose();
  }
    return (
        <Modal  dialogClassName="modal-90w" show={props.show} onHide={props.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title >{props.playlistName}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Pagination>{props.paginationItems}</Pagination>  
                    <ListGroup >
                      {props.tracks.map((value,index)=>{
                      return   <ListGroup.Item action key={index} >
                      <Row>
                        <Col>
                            {value.track.name}
                        </Col>
                        <Col className="text-right">
                            <Button onClick={()=>{handleModalChange(value.track.uri)}}>Add To Another Playlist</Button>
                        </Col>
                      </Row>
                      </ListGroup.Item>
                    })}
                     
                    </ListGroup>   
                    <Pagination>{props.paginationItems}</Pagination>          
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
    )
}
export default TrackListModal;