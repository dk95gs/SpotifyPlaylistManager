import React , {useState} from 'react';
import ListItem from '../../Shared/ListItem/ListItem';
import axios from 'axios';
import querystring from 'querystring';
import ConfirmBox from '../../Shared/ConfirmBox/ConfirmBox';
import {connect} from 'react-redux';
import {
    Modal,ListGroup, Row, Col, Button
} from 'react-bootstrap';
const PlaylistsModal = (props) =>{
 
  let idList = [];
  const handleModalChange = () =>{
    props.handlePlaylistsModalClose();
    props.handleTrackListModalShow();
   
  }

  const addToSelectedPlaylists = () =>{
    let modedUri = props.trackUri;
    let i = modedUri.indexOf("k:");
     modedUri = modedUri.slice(i+2,modedUri.length);
     console.log("dsa"+ props.idList);
    for (let i = 0; i <= props.idList.length; i++) {

      if(props.idList[i] !== undefined){
        const url = `https://api.spotify.com/v1/playlists/${props.idList[i]}/tracks?uris=spotify%3Atrack%3A${modedUri}`;
        
        axios.post(url,{}, props.headers).then(res =>{
          
        }).catch((err)=>{console.log(err)});
      }
    }
    props.handleCloseConfirm();
    props.handlePlaylistsModalClose();
  }
    return (
        <div>
          <Modal  dialogClassName="modal-90w" show={props.showPlaylistModal} onHide={handleModalChange}>
        <Modal.Header closeButton>
          <Modal.Title >Choose Which Playlists to add selected song to</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <Button onClick={props.handleShowConfirm}>Add To Playlists</Button>
          <ListGroup>
            {props.playlist.value.map((value,index)=>{
            return   <ListItem name={value.name} index={index} id={value.id} addToIdList={props.addToIdList} removeFromIdList={props.removeFromIdList}/>
          })}
           
          </ListGroup>          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalChange}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
           <ConfirmBox
                      show={props.showConfirm}
                      handleCloseConfirm={props.handleCloseConfirm}
                      handleConfirm={addToSelectedPlaylists}
                      modalTitle="Are you sure you want to add to these playlists?"
                      cancelBtnShow={true}
                    />
        </div>
    );
}
const mapStateToProps = (state) => {
  return {
    playlist: state.playlist
  }
} 

export default connect(mapStateToProps)(PlaylistsModal);