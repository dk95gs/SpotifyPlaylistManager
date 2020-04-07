import React from 'react';
import {Card, Button} from 'react-bootstrap';
const PlaylistCard = (props) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.images.length !== 0 ? props.images[0].url : ""} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    <Button onClick={()=>{props.getPlaylistTracks(props.tracksHref, props.name, 0)}}>See Tracks</Button>
                </Card.Text>
            </Card.Body>
        </Card>  
    );
}
export default PlaylistCard;