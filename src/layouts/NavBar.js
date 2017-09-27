import React,{ Component } from 'react'
import { connect } from 'react-redux';
import {  withRouter, Link } from 'react-router-dom';
import { resetloginUser,userLogout,userLogoutSuccess,userLogoutFailure } from '../actions/user_action';
import {authenticated,unauthenticated,authenticated_error} from '../actions/auth_action';
import RouteNavItem from '../components/RouteNavItem';

class NavBar extends Component {
  handleLogout(event){
    var token = localStorage.getItem("user");
    this.props.userLogout(token);
  }

  componentWillUnmount(){
    if(this.props.loginUser.message === "Sign out sucessfully"){
      this.props.history.push('/employee');
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
    authenticated: state.auth.authenticate,
    loginUser: state.user.loginUser
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
            localStorage.clear();
          }
          else{
            dispatch(userLogoutFailure());
          }
        })
        .catch((err)=>{
          dispatch(authenticated_error());
        })
      },
      resetMe: () => {
        dispatch(resetloginUser());
      }
    }
  }

export default withRouter(connect(mapStateToProps,matchDispatchToProps)(NavBar));