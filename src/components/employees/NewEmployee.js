import React, { Component } from 'react';
import EmpForm from './EmpForm';
class NewEmployee extends Component {

  submit = (values) => {
    let formData = new FormData();
    for(const key in values){
      if(key === 'photo'){
        formData.append(key,values[key][0])
      }
     else {
        formData.append(key,values[key])
      }
    }
    this.props.createEmployee(formData);
   }

  componentWillReceiveProps(nextProps) {
     if(nextProps.newEmployee.success){
       this.props.history.push("/employee")
     }
   }
  
  render(){
    const { employee, loading, error,success} = this.props.newEmployee;
    if(loading) {
      return <div className="container"><h1>Employees</h1><h3>Creating...</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }
    return(
      <div>
        {this.props.loginUser.user && <EmpForm onSubmit= {this.submit} m_user_id = {this.props.loginUser.user.id} />}
      </div>
    );
  }
}
export default NewEmployee;
