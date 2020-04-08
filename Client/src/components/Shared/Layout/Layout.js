import React from 'react';

const Layout = (props) =>{
    return(
        <div  className="text-center">
            {props.children}
        </div>
    )
}
export default Layout;