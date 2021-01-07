import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/index';
//import './style.js';
import {Provider} from 'react-redux';
import store from './store/index'
// import {ThemeProvider} from 'styled-components';
 import {GlobalStyle} from './style'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

