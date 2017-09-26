import React, { Component } from 'react';
import { withRouter,Link} from 'react-router-dom';
import { Navbar,Nav,NavItem} from 'react-bootstrap';
import RouteNavItem from '../components/RouteNavItem';
import '../css/Header.css';
import { connect } from 'react-redux';
import { userLogout, userLogoutSuccess,userLogoutFailure } from '../actions/user_action';
import {authenticated,unauthenticated,authenticated_error} from '../actions/auth_action';
import NavBar from './NavBar';

class Header extends Component{
  handleNavLink(event){
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));
  }

  handleLogout(){
    var token = localStorage.getItem("user");
    this.props.userLogout(token);
  }

  render(){
    return (
    <Navbar fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Emp Portal</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
          <Nav pullRight>
            <RouteNavItem onClick={this.handleNavLink.bind(this)} href="/employee">Home</RouteNavItem>
            <RouteNavItem onClick={this.handleNavLink.bind(this)} href="/about">About</RouteNavItem>
            <RouteNavItem onClick={this.handleNavLink.bind(this)} href="/contact">Contact</RouteNavItem>
            {this.props.authenticated?<NavBar/ >: [<RouteNavItem key={1} onClick={this.handleNavLink.bind(this) }href="/signup">Signup </RouteNavItem>,
            <RouteNavItem key={2} onClick={this.handleNavLink.bind(this)} href="/login">Login</RouteNavItem>]}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
  };
}


function mapStateToProps(state,Ownprops) {
  return {
    authenticated: state.auth.authenticate
  };
}

export default withRouter(connect(mapStateToProps)(Header));

