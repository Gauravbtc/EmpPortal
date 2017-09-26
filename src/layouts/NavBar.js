import React,{ Component } from 'react'
import { connect } from 'react-redux';
import {  withRouter, Link } from 'react-router-dom';
import { userLogout, userLogoutSuccess,userLogoutFailure } from '../actions/user_action';
import {authenticated,unauthenticated,authenticated_error} from '../actions/auth_action';
import RouteNavItem from '../components/RouteNavItem';

class NavBar extends Component {
  handleLogout(event){
    var token = localStorage.getItem("user");
    this.props.userLogout(token);
  }

  componentWillUnmount(){
    var redirect = this.props.logoutUser.success
    if(redirect){
        this.props.history.push("/login");
    }
  }

  render() {
    return (
        <div>
          <RouteNavItem onClick={this.handleLogout.bind(this)}>Logout</RouteNavItem>
        </div>
    );
  }
}

function mapStateToProps(state,Ownprops) {
  return {
    authenticated: state.auth.authenticated,
    logoutUser: state.user.logoutUser
  };
}


function matchDispatchToProps(dispatch){
  return {
    userLogout: (token) => {
      (dispatch(userLogout(token)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(userLogoutSuccess(response.data));
            dispatch(unauthenticated());
            localStorage.removeItem("user");
          }
          else{
            dispatch(userLogoutFailure(response.data));
            dispatch(authenticated());
          }
        })
        .catch((err)=>{
          dispatch(authenticated_error());
        })
      },
    }
  }

export default withRouter(connect(mapStateToProps,matchDispatchToProps)(NavBar));