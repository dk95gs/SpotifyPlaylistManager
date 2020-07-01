import React, {Component} from 'react';
import Layout from '../components/Shared/Layout/Layout';
import Landing from '../components/Landing/Landing';
import MyNavbar from '../components/Shared/MyNavbar/MyNavbar';
import Playlists from '../components/Playlists/Playlists';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <Layout>
                <Router>
                    <MyNavbar/>
                    <Switch>
                        <Route path="/playlists">
                            <Playlists />
                        </Route>
                        <Route path="/">
                            <Landing />
                        </Route>
                    </Switch>
                </Router>
            </Layout>
        )
    }

}
export default App;