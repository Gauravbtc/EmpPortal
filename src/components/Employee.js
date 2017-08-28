import React, { Component } from 'react';
import './Employee.css'
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Employee extends Component{
  constructor(props){
		super(props);    // console.log(employees);
	}


  render(){
    const emps = employees.map((emp,i) =>
			<EmployeeBody key={i} id= {emp.id } firstname={emp.firstname} lastname={emp.lastname} age={emp.age} city={emp.city} />
		 );
    return(
      <div>
      <div className="panel panel-default">
        <div className="panel-heading">Employee Detail
          <div className='pull-right'>
            <Link to="/emp_new" className="btn btn-primary">Employee</Link>
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
                  <th>Age</th>
                  <th>City</th>
                  <th>Action</th>
                </tr>
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

const employees = [
  {id: 1, firstname: 'Gaurav', lastname: 'Makwana', age: '23', city: 'Cambay'},
  {id: 2, firstname: 'Maimit', lastname: 'Patel', age: '25', city: 'Baroda'},
];

class EmployeeBody extends Component{
  render(){
    return(
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.firstname}</td>
        <td>{this.props.lastname}</td>
        <td>{this.props.age}</td>
        <td>{this.props.city}</td>
        <td>
          <FontAwesome name='eye' className="btn btn-sm btn-default"  />
          <FontAwesome name='pencil'className="btn btn-sm btn-primary"  />
          <FontAwesome name='trash'className="btn btn-sm btn-danger" />
        </td>
      </tr>
    );
  }
}
export default Employee;
