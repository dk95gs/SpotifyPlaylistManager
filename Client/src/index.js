import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Shared/Layout/Layout';
import Landing from './components/Landing/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyNavbar from './components/Shared/MyNavbar/MyNavbar';
import Playlists from './components/Playlists/Playlists';
import store from './redux/store';
import { Provider } from 'react-redux';
ReactDOM.render(
<Provider store={store}>
    <React.StrictMode>
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
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
