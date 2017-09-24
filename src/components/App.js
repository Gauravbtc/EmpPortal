import React, { Component } from 'react';
import '../css/App.css';
import Routes from '../Routes/Routes';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { withRouter} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAuthenticated: false , //for manage login state 
      };
    }

    //update login state during login
    updateUserToken = (userToken) => {
      this.setState({
        isAuthenticated: userToken
      });
    }
    
    handleLogout(event){
      event.preventDefault();
      this.setState({
        isAuthenticated: false
      });
      console.log("Logout" + this.state.isAuthenticated)
      this.props.history.push('/login');
    }

  render() {
    //passs tlogin state to other compontes routes using chilid props
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.updateUserToken
    };

childProps
  return (
    <div className="App container">
      <Header isAuthenticated ={childProps} handleLogout = {this.handleLogout} />
        <Routes childProps={childProps} />
      <Footer/>
    </div>
  );
}
}
export default withRouter(App);
