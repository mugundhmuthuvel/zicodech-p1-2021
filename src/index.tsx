import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import OAuth from './authorization/OAuth';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider>
        <Switch>
          <Route path="/oauthrdt" {...{ exact: true }} component={OAuth} />
          <Route path="" component={App} />
        </Switch>
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
