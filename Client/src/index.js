import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './redux/store';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
<Provider store={store}>
    <React.StrictMode>
        <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
