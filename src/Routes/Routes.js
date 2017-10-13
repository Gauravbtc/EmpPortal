import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import UserSignUpPage from '../pages/user/UserSignUpPage';
import PrivateRoute from '../components/auth/require_auth';
import ConfirmationMessage from '../components/users/ConfirmationMessage';
import Confirmation from '../containers/userContainer/ConfirmationContainer';
import ForgotPassword from '../containers/userContainer/ForgotPasswordContainer';
import NewPassword from '../containers/userContainer/NewPasswordContainer';


export default ( ) => (
  <Switch>
    <Route path= "/" exact component={Home} />
    <Route path= "/contact" exact component={Contact} />
    <Route path= "/about" exact component={About} />
    <PrivateRoute path="/employee" exact component= {EmployeeIndex}/>
    <PrivateRoute path = "/employee/show/:id" exact component= {ShowEmployee} />
    <PrivateRoute path = "/employee/new" exact component = {NewEmployeePage} />
    <PrivateRoute path = "/employee/:id/edit" exact component = {EditEmployeePage} />
    <PrivateRoute path = "/empForm/new" exact component = {EmpFormPage} />
    <Route path = "/login" exact component = {UserLoginPage} />
    <Route path = "/signup" exact component = {UserSignUpPage} />
    <Route path = "/users/confirmation" exact component = {ConfirmationMessage} />
    <Route path="/users/confirmation/:token=:query1" exact component={Confirmation} />
    <Route path="/users/password/:token=:query1" exact component={NewPassword} />
    <Route path="/users/forgotpassword" exact component={ForgotPassword} />
    <Route component={NotFound} />
  </Switch>
);
