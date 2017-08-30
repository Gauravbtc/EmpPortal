import React, { Component } from 'react';
import '../css/Home.css';
import Card from './Card'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="Home">
          <div className="lander">
            <h1>Emp Portal</h1>
            <p>##Slider</p>
          </div>
        </div>
        <div>
          <Card/>
        </div>
      </div>
    );
  }
}
export default Home;
