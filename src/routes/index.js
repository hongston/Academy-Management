import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainLayout from '@layouts/MainLayout/MainLayout';
import LoginLayout from '@layouts/LoginLayout/LoginLayout';

export default () => (
  <Router>
    <Switch>   
      <Route path="/login" component={LoginLayout} />
      <Route path="/" component={MainLayout} />   
    </Switch>
  </Router>
);