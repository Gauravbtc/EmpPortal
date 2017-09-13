import React, { Component } from 'react';
import  EmpForm from './EmpForm';
class NewEmployee extends Component {

 submit = (values) => {
   console.log(values);
    this.props.createEmployee(values);
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
        <EmpForm onSubmit= {this.submit} />
      </div>
    );
  }
}
export default NewEmployee;
