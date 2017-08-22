import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';


class Header extends Component{
  render(){
    <Navbar fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Emp Portal</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    </Navbar>
  };
}

export default Header;
