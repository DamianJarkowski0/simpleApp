import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import App from './components/App';
import {GlobalProvider} from './context'
import Login from './components/Login';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
