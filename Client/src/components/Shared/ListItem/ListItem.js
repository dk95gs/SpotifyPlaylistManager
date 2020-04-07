import React from 'react';
import {Row, Col} from 'react-bootstrap';

const ListItem = (props) =>{

    const toggleActive = (index, id) =>{
        let e =  document.getElementById(index);
        if(e.classList.contains("active")){
            props.removeFromIdList(id);
            e.classList.remove("active");
        } else {
            props.addToIdList(id);
            e.classList.add("active");
        }
       
    }
    return (
        <div className={`list-group-item list-group-item-action`}  action key={props.index} id={props.index} onClick={()=>{toggleActive(props.index, props.id)}} >
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