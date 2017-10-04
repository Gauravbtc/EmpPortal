import React ,{ Component } from 'react'
import ForgotPasswordForm from './ForgotPasswordForm'
import { withRouter } from 'react-router-dom'

class ForgotPassword extends Component{

  submit = (values) => {
   this.props.userForgotPassword(values);
  }


  componentWillReceiveProps(nextProps) {
    if(nextProps.loginUser.success){
       this.props.history.push('/users/confirmation');
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
        <ForgotPasswordForm onSubmit={this.submit}/>
      </div>
    )
  }
}

export default withRouter(ForgotPassword);
