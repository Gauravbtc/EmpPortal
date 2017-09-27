import React from 'react';
import { Route, Switch ,Redirect} from 'react-router-dom';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import About from '../containers/About';
import Contact from '../containers/Contact';
import EmployeeIndex from '../pages/employee/EmployeeIndex';
import ShowEmployee from '../pages/employee/ShowEmployee';
import NewEmployeePage from '../pages/employee/NewEmployeePage';
import EditEmployeePage from '../pages/employee/EditEmployeePage';
import EmpFormPage from '../pages/employee/EmpFormPage';
import UserLoginPage from '../pages/user/UserLoginPage';
import requireAuth from '../components/auth/require_auth';

//import LoginUser from '../components/Users/LoginUser';
//import NewEmployee from '../components/employees/NewEmployee';
//import ShowEmployee from '../containers/Employee/ShowEmployee';
//import ShowEmployee from '../components/employees/ShowEmployee';

export default ( ) => (
  <Switch>
    <Route path= "/" exact component={Home} />
    <Route path= "/contact" exact component={Contact} />
    <Route path= "/about" exact component={About} />
    <Route path="/employee" exact component= {requireAuth(EmployeeIndex)}/>
    <Route path = "/employee/show/:id" exact component = {requireAuth(ShowEmployee)} />
    <Route path = "/employee/new" exact component = {requireAuth(NewEmployeePage)} />
    <Route path = "/employee/:id/edit" exact component = {requireAuth(EditEmployeePage)} />
    <Route path = "/empForm/new" exact component = {requireAuth(EmpFormPage)} />
    <Route path = "/login" exact component = {UserLoginPage} />
    <Route component={NotFound} />
  </Switch>
);
