import cookie from 'react-cookies';

export function CheckIfLoggedIn(){
    if(cookie.load('access_token') === undefined) {
        return false;
    } else {
        return true;
    }
}

export function CheckLoginExpired(){
    if(!CheckIfLoggedIn()){
        Login();
    }
}
export function GetToken(){
        const params = window.location.search;
        const urlParams = new URLSearchParams(params);
        const at =  urlParams.get('access_token');
        const rt = urlParams.get('refresh_token');
        
        if (at !== null ){
            cookie.save('access_token', at, { path: '/', maxAge: 3500 });
            cookie.save('refresh_token', rt, { path: '/', maxAge: 2147483647  });
            window.history.pushState("", "", '/');
        }
}
export function Login() {
    /* In production - enable this
        
        const url = window.location + "login";

        window.location.replace(url);
    */
   const url = "https://spmserver.herokuapp.com/login";

    window.location.replace(url);
}
export function RefreshToken() {
    const url = "https://pure-shelf-28258.herokuapp.com/?refresh_token="+ cookie.load("refresh_token");
    window.location.replace(url);
}