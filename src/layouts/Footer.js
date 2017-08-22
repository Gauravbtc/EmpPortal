import React, { Component } from 'react';
import './Footer.css'


class Footer extends Component{
  render(){
    return(
      <div>
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="text-color">Copyright © Emp Portal 2017</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer
