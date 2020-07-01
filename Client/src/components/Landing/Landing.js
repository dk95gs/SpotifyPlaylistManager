import React from 'react';
import {Button} from 'react-bootstrap';
import cookie from 'react-cookies';
import axios from 'axios';
import {CheckIfLoggedIn, Login, GetToken,RefreshToken} from '../../Utility/AuthUtil';

const Landing = () => {

    GetToken();
    let test = {headers: {'Authorization': 'Bearer ' + cookie.load("access_token") }};
    const url = 'https://api.spotify.com/v1/me';

    axios.get(url, test).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });
    return(
        <div>
            { 
                CheckIfLoggedIn() ?
                <div>
                    <h1>You have logged in!</h1>
                    <Button onClick={RefreshToken}>dasdsa</Button>    
                </div> : 
                <Button onClick={Login}>Login Through Spotify </Button>
            }
            
        </div>
    )
}

export default Landing;

/*

 if (at && rt !== null){
            const url = 'https://api.spotify.com/v1/me';
            const header = {headers: {'Authorization': 'Bearer ' + at }};
    
            axios.get(url, header).then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            });
    
        }
*/