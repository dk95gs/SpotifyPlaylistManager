import React, {useState, useEffect} from 'react';
import {
    Button,
    Pagination,
    Modal,
    ListGroup
} from 'react-bootstrap';
import ListItem from '../../Shared/ListItem/ListItem';
import './TrackListModal.css';

const TrackListModal = (props) =>{
  
  let [uriList, setUriList] = useState([]);

  const addUriToList = (uri) =>{
    let tempList = uriList;
    tempList.push(uri);
    setUriList(uriList = tempList);
  }
  const removeUriFromList = (uri) =>{
    let tempList = uriList;
    let index = tempList.indexOf(uri);
  
    tempList.splice(index, 1);
    setUriList(uriList = tempList);
    
  }
  const handleModalChange = () =>{
    
        props.handlePlaylistsModalShow();
    props.updateTrackUri(uriList);
    props.handleTrackListModalClose();
    setUriList(uriList = []);
  }
  const selectAllTracks = () =>{
    var e = document.querySelectorAll('.list-group-item');
    props.tracks.map((value)=>{
      addUriToList(value.track.uri);
    });
    for (var i = 0; i < e.length; i++) {
        e[i].classList.add('active');
    }
  }
  const deselectAllTracks = () =>{
    var e = document.querySelectorAll('.list-group-item');
    props.tracks.map((value)=>{
      removeUriFromList(value.track.uri);
    });
    for (var i = 0; i < e.length; i++) {
        e[i].classList.remove('active');
    }
  }
  useEffect(()=>{
    return () =>{
      setUriList(uriList = []);
    }
  },[props.show]);
  
    return (
        <Modal  dialogClassName="modal-90w" show={props.show} onHide={props.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title >{props.playlistName}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Button onClick={handleModalChange}>Choose Playlists to add to</Button>
                  <Button className="btn-secondary" onClick={selectAllTracks}>Select All Tracks</Button>
                  <Button className="btn-danger"  onClick={deselectAllTracks}>Unselect Everything</Button>
                    <ListGroup >
                      {props.tracks.map((value,index)=>{
                      return <ListItem name={value.track.name} index={index} uri={value.track.uri} id={value.track.id} addToIdList={addUriToList} removeFromIdList={removeUriFromList} isUri={true}/>
                      /*<ListGroup.Item action key={index} >
                      <Row>
                        <Col>
                            {value.track.name}
                        </Col>
                        <Col className="text-right">
                            <Button onClick={()=>{handleModalChange(value.track.uri)}}>Add To Another Playlist</Button>
                        </Col>
                      </Row>
                      </ListGroup.Item> */
                    })}
                     
                    </ListGroup>   
                          
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