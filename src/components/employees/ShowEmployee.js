import React, { Component } from 'react';
class ShowEmployee extends Component{
  componentDidMount(){
      this.props.fetchEmployee(this.props.id)
    }

  render(){
    const { employee, error, loading } = this.props.showEmployee;
    if(loading){
      return <div className="container"><h1>Employee</h1><h3>Loading...</h3></div>
    }else if(error){
      return <div className="alert alert-danger">Error: {error.message}</div>
    } else if (!employee) {
      return <span />
    }
    return(
      <div>
        <p>First Name: {employee.firstname}</p>
        <p>Last Name: {employee.lastname}</p>
        <p>Gender: {employee.gender}</p>
        <p>EMail: {employee.email} </p>
      </div>
    );
  }
}

export default ShowEmployee;
