import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Routes from './Routes';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

class App extends Component {
  render() {
  return (
    <div className="App container">
      <Header />
        <Routes />
      <Footer/>  
    </div>
  );
}
}
export default App;
