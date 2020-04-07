import React from 'react';
import {Row, Col} from 'react-bootstrap';

const ListItem = (props) =>{
    
    const toggleActive = (index, id, uri) =>{
        let e =  document.getElementById(index)  || document.getElementById(id) ;
        if(e.classList.contains("active")){
            if(props.isUri){
                props.removeFromIdList(uri);
                e.classList.remove("active");
            } else {
                props.removeFromIdList(id);
                e.classList.remove("active");
            }
        
        } else {
            if (props.isUri){
                console.log("uri true");
                props.addToIdList(uri);
                e.classList.add("active");
            } else {
                props.addToIdList(id);
                e.classList.add("active");
            }
            
        }
       
    }
    return (
        <div className={`list-group-item list-group-item-action`}  action key={props.index} id={props.id} onClick={()=>{toggleActive(props.index, props.id, props.uri)}} >
                        <Row>
                          <Col>
                              {props.name}
                          </Col>
                          <Col className="text-right">
                            
                          </Col>
                        </Row>
                      </div>
    );
}
export default ListItem;