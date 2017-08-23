import React, { Component } from 'react';

class Employees extends Component{
  constructor(props){
		super(props);    // console.log(employees);
	}

  render(){
    const emps = employees.map((emp,i) =>
			<Employee key={i} id= {emp.id } firstname={emp.firstname} lastname={emp.lastname} age={emp.age} city={emp.city} />
		 );
    return(
      <div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {emps}
            </tbody>
          </table>
      </div>
    </div>
    );
  }
}

const employees = [
  {id: 1, firstname: 'Gaurav', lastname: 'Makwana', age: '23', city: 'Cambay'},
  {id: 2, firstname: 'Maimit', lastname: 'Patel', age: '25', city: 'Baroda'},
];

class Employee extends Component{
  render(){
    return(
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.firstname}</td>
        <td>{this.props.lastname}</td>
        <td>{this.props.age}</td>
        <td>{this.props.city}</td>
      </tr>
    );
  }
}
export default Employees;
