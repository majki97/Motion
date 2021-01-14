import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SignInRoute } from './routes/SignInRoute';
import { HomeRoute } from './routes/HomeRoute';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { authAction } from './store/actions/auth';

const token = localStorage.getItem('token');
if (token) {
  store.dispatch(authAction(token));
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <ThemeProvider theme= { theme }>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={ SignInRoute } exact />
              <Route path="/Home" component={ HomeRoute } exact />
            </Switch>
          </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


