import React ,{ Component } from 'react'
import LoginForm from './LoginForm'
import { withRouter } from 'react-router-dom'

class LoginUser extends Component{

  constructor(props){
    super(props);
  }
  submit = (values) => {
   this.props.userLogin(values);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.loginUser.success){
      this.props.userHasAuthenticated(true);
      //this.props.history.push('/employee');
      
    }
  }

  error_message(error){
    if(error){
    return <div className="alert alert-danger">Error: {error.message} </div>}
  }

  render(){
    const { user, loading, error,success} = this.props.loginUser;
    if(loading) {
      return <div className="container"><h1>Logging</h1></div>
    }
    return(
      <div>
        {this.error_message(error)}
        <LoginForm onSubmit={this.submit}/>
      </div>
    )
  }
}

export default withRouter(LoginUser);
