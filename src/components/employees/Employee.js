import React, { Component } from 'react';
import '../../css/Employee.css'
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Employee extends Component{
  componentDidMount(){
    this.props.fetchEmployees()
  }
  
  render(){
    const { employees, loading, error } = this.props.employeeList;
    if(loading) {
      return <div className="container"><h1>Users</h1><h3>Loading.</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    const emps = this.props.employees.map((emp,i) =>
			<EmployeeBody key={i} id= {emp.id } firstname={emp.firstname} lastname={emp.lastname} gender={emp.gender} email={emp.email} />
		 );
    return(
      <div>
      <div className="panel panel-default">
        <div className="panel-heading">Employee Detail
          <div className='pull-right'>
            <Link to="/employee/new" className="btn btn-primary">Employee</Link>
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
                </tr>dispatch
              </thead>
              <tbody>
                {emps}
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
          <Link to={`/employee/show/${this.props.id}`}><FontAwesome name='eye' className="btn btn-sm btn-default"/></Link>
          <FontAwesome name='pencil'className="btn btn-sm btn-primary"  />
          <FontAwesome name='trash'className="btn btn-sm btn-danger" />
        </td>
      </tr>
    );
  }
}

export default Employee;
