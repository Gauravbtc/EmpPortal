import React ,{ Component } from 'react'
import LoginUserContainer from '../../containers/userContainer/LoginUserContainer';


class LoginUserPage extends Component{
    render(){
      return(
        <LoginUserContainer isAuthenticated= {this.props.isAuthenticated}  userHasAuthenticated = {this.props.userHasAuthenticated}
          />
      );
    }
  }
export default LoginUserPage