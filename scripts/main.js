import React from 'react';
import ReactDom from 'react-dom'; 

import { Router, Route } from 'react-router';

import {createHistory} from 'history';

var h = require('./helpers');


import ErrorPage from './components/ErrorPage';
import TravelLog from './components/TravelLog';
import App from './components/App';

  /*
    Routes
  */
  
  var routes = (
    <Router history={createHistory()}>
      <Route path="/" component={TravelLog} />
      <Route path="/traveller/:travellerId" component={App} />
      <Route path="*" component={ErrorPage} />
      
    </Router>
  )
  

ReactDom.render(routes, document.querySelector('#main'));