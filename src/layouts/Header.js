import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import Routes from '../Routes';
import './Header.css';

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
            <NavItem onClick={this.handleNavLink.bind(this)} href="/home">Home</NavItem>
            <NavItem onClick={this.handleNavLink.bind(this)} href="/about">About</NavItem>
            <NavItem onClick={this.handleNavLink.bind(this)} href="/services">Services</NavItem>
            <NavItem onClick={this.handleNavLink.bind(this)} href="/contact">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
  };
}

export default Header;
//export default withRouter(Header);
