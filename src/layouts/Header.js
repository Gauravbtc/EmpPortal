import React, { Component } from 'react';
import { withRouter,Link } from 'react-router-dom';
import { Navbar,NavItem, Nav} from 'react-bootstrap';
import RouteNavItem from '../components/RouteNavItem';
import '../css/Header.css';

class Header extends Component{
  handleNavLink(event){
  event.preventDefault();
  this.props.history.push(event.currentTarget.getAttribute('href'));
}
  render(){
     var {isAuthenticated,userHasAuthenticated} = this.props.isAuthenticated;
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
            { isAuthenticated? <NavItem onClick={this.props.handleLogout}>Logout</NavItem>: [
              <RouteNavItem key={1} onClick={this.handleNavLink.bind(this)} href="/signup"> Signup</RouteNavItem>,
              <RouteNavItem key={2} onClick={this.handleNavLink.bind(this)} href="/login">Login </RouteNavItem>]} 
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
  };
}

//export default Header;
export default withRouter(Header);
