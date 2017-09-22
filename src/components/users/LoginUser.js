import React ,{ Component } from 'react'
import LoginForm from './LoginForm'
import { withRouter } from 'react-router-dom'

class LoginUser extends Component{

  submit = (values) => {
   //console.log(values);
   this.props.userLogin(values);
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.loginUser.success){
       this.props.history.push('/employee');
    }
  }

  render(){
    const { user, loading, error,success} = this.props.loginUser;
    if(loading) {
      return <div className="container"><h1>Logging</h1></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return(
      <div>
        <LoginForm onSubmit={this.submit}/>
      </div>
    )
  }
}

export default withRouter(LoginUser);