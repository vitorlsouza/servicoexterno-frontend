import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import List from '../pages/List';
import CreateService from '../pages/CreateService';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/novo" component={CreateService} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
