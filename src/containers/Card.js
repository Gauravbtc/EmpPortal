import React, { Component } from 'react';
import '../css/Card.css';
import { Link } from 'react-router-dom';
class Card extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-sm-3">
          <div className="card card-width">
            <img className="card-img-top" src="http://placehold.it/200x200" alt="Card image cap" />
            <div className="card-block">
              <h4 className="card-title">Employee</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/employee" className="btn btn-primary">Employee</Link>
            </div>
            </div>
          </div>
        <div className="col-sm-3">
          <div className="card card-width">
            <img className="card-img-top" src="http://placehold.it/200x200" alt="Card image cap" />
            <div className="card-block">
              <h4 className="card-title">Products</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Products</a>
            </div>
            </div>
          </div>

        <div className="col-sm-3">
          <div className="card card-width">
            <img className="card-img-top" src="http://placehold.it/200x200" alt="Card image cap" />
            <div className="card-block">
              <h4 className="card-title">Others</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Others</a>
            </div>
            </div>
          </div>

        <div className="col-sm-3">
          <div className="card card-width">
            <img className="card-img-top" src="http://placehold.it/200x200" alt="Card image cap" />
            <div className="card-block">
              <h4 className="card-title">Other</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Others</a>
            </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Card;
