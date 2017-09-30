import React ,{ Component } from 'react'
import SignUpForm from './SignUpForm'
import { withRouter } from 'react-router-dom'
import createFragment from 'react-addons-create-fragment';

class SignUpUser extends Component{

  submit = (values) => {
    this.props.userSignUp(values);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.signupUser.success){
       this.props.history.push('users/confirmation');
    }
  }


  error_message(error){
    if( error ){    
      let children;
      const mail = error.message.email? "Email " : ""
      const pwd = error.message.password? "Password " : ""
      if (error.message.email) {
        children = createFragment({
          right:  mail + error.message.email,
          left: pwd + error.message.password
        });
      } else {
        children = createFragment({
          left: pwd + error.message.password,
          right: mail + error.message.email
        });
      }
      return <div className="alert alert-danger">Error: {children} </div>
    }
  }

  render(){
    const { user, loading, error,success} = this.props.signupUser;
    if(loading) {
      return <div className="container"><h1>Logging</h1></div>
    }
   // console.log(error.email);
    return(
      <div>
        {this.error_message(error)}
        <SignUpForm onSubmit={this.submit}/>
      </div>
    )
  }
}
export default withRouter(SignUpUser);