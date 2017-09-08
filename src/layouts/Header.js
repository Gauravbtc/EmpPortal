import React, { Component } from 'react';
import { withRouter,Link } from 'react-router-dom';
import { Navbar,Nav} from 'react-bootstrap';
import RouteNavItem from '../components/RouteNavItem';
import '../css/Header.css';

class Header extends Component{
  handleNavLink(event){
  event.preventDefault();
  this.props.history.push(event.currentTarget.getAttribute('href'));
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
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
  };
}

//export default Header;
export default withRouter(Header);
