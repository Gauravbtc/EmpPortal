import React ,{ Component } from 'react'
import NewPasswordForm from './NewPasswordForm'
import { withRouter } from 'react-router-dom'


class NewPassword extends Component{
  submit = (values) => {
    console.log(values);
    this.props.userPasswordNew(values);
  }


  componentWillReceiveProps(nextProps) {
    if(nextProps.loginUser.success){
        this.props.history.push('/');
    }
  }

  
  error_message(error){
    if(error){
    return <div className="alert alert-danger">Error: {error.message} </div>}
  }

  render(){
    const { user, loading, error,success} = this.props.loginUser;
    console.log(this.props.match.params.query1);
    if(loading) {
      return <div className="container"><h1>Logging</h1></div>
    }
    return(
      <div>
        {this.error_message(error)}
        <NewPasswordForm onSubmit={this.submit} token = {this.props.match.params.query1}/>
      </div>
    )
  }
}
    
export default withRouter(NewPassword);