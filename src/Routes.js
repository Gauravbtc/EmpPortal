import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import About from './containers/About';
import Contact from './containers/Contact';
import Employees from './containers/Employee/Employees';
import NewEmployee from './containers/Employee/NewEmployee';


export default () => (
  <Switch>
    <Route path= "/" exact component={Home} />
    <Route path= "/contact" exact component={Contact} />
    <Route path= "/about" exact component={About} />
    <Route path="/employee" exact component={Employees} />
    <Route path ="/emp_new" exact component={NewEmployee} />
    <Route component={NotFound} />
  </Switch>
);
