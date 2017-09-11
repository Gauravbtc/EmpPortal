import React, { Component } from 'react';
import '../../css/Employee.css'
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Employee extends Component{

  componentWillMount(){
    this.props.fetchEmployees()
  }

  resetMe(){
    this.props.resetMe();
  }
  createEmployees(employees){
    return employees.map((emp)=>{
      return(
        <tr key={emp.id}>
          <td>{emp.id}</td>
          <td>{emp.firstname}</td>
          <td>{emp.lastname}</td>
          <td>{emp.gender}</td>
          <td>{emp.email}</td>
          <td>
            <Link to={`/employee/show/${emp.id}`}><FontAwesome name='eye' className="btn btn-sm btn-primary" /></Link>
            <Link to={`/employee/${emp.id}/edit`}><FontAwesome name='pencil'className="btn btn-sm btn-primary"/></Link>
            <FontAwesome name="trash" className="btn btn-sm btn-danger" onClick={this.props.deleteEmployee.bind(this,emp.id, this.props.employeeList.employees)} />
          </td>
        </tr>
      )
    })
  }
  newEmp(){
    return (<Link to="/employee/new" className="btn btn-primary">Employee</Link>);
  }

  render(){
    const { employees, loading, error } = this.props.employeeList;
    if(loading) {
      return <div className="container"><h1>Employees</h1><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }
    return(
      <div>
      <div className="panel panel-default">
        <div className="panel-heading">Employee Detail
          <div className='pull-right'>
              {this.newEmp()}
          </div>
        </div>
        <div className="panel-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Gender</th>
                  <th>Mail</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.createEmployees(employees)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

class EmployeeBody extends Component{
  render(){
    return(
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.firstname}</td>
        <td>{this.props.lastname}</td>
        <td>{this.props.gender}</td>
        <td>{this.props.email}</td>
        <td>
          <Link to={`/employee/show/${this.props.id}`}><FontAwesome name='eye' className="btn btn-sm btn-primary" /></Link>
          <Link to={`/employee/${this.props.id}/edit`}><FontAwesome name='pencil'className="btn btn-sm btn-primary"/></Link>
          <p>{this.props.employees}</p>
        </td>
      </tr>
    );
  }
}
export default Employee;
