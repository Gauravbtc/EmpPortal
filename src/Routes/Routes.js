import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import About from '../containers/About';
import Contact from '../containers/Contact';
//import Employee from '../components/employees/Employee';
import NewEmployee from '../containers/Employee/NewEmployee';
import ShowEmployee from '../containers/Employee/ShowEmployee';
import EmployeeIndex from '../pages/EmployeeIndex';
export default () => (
  <Switch>
    <Route path= "/" exact component={Home} />
    <Route path= "/contact" exact component={Contact} />
    <Route path= "/about" exact component={About} />
    <Route path="/employee" exact component={EmployeeIndex} />
    <Route path ="/employee/new" exact component={NewEmployee} />
    <Route path ="/employee/show/:id"  exact component ={ShowEmployee}/>
    <Route component={NotFound} />
  </Switch>
);
