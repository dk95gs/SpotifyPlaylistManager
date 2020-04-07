import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import MyNavbar from '../MyNavbar/MyNavbar';
const Layout = (props) =>{
    return(
        <div  className="text-center">
            {props.children}
            
        </div>
    )
}
export default Layout;