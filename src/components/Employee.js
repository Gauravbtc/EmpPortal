import React, { Component } from 'react';
import '../css/Employee.css'
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { employeeList,fetchEmployees,fetchEmployeesSuccess,fetchEmployeesFailure } from '../actions/employee_action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class Employee extends Component{
  constructor(props){
		super(props);    // console.log(employees);
	}

  componentDidMount(){
    this.props.fetchEmployees()
    //this.props.employeeList()
  }





  // createEmployeeList(){
  //   return this.props.employee.map((emp) =>{
  //     return(
  //       <li key={emp.id}> {emp.firstname} {emp.lastname} />
  //       </li>
  //     )
  //   });
  // }

  render(){
    //console.log("yy"+ this.props.employee);
    const emps = this.props.employee.map((emp,i) =>
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


function mapStateToProps(state){
  console.log("qq"+state.employee.employeeList.employees)
  return{
    employee: state.employee.employeeList.employees
  }
}


// function matchDispatchToProps(dispatch){
//   return bindActionCreators({
//     employeeList: employeeList
//   }, dispatch)
// }

function matchDispatchToProps(dispatch){
  return {
    fetchEmployees: () => {
      (dispatch(fetchEmployees()).payload).then((response) => {
          !response.error ? dispatch(fetchEmployeesSuccess(response.data)) : dispatch(fetchEmployeesFailure(response.data));
        })
    }
  }
}


const employee = connect(mapStateToProps, matchDispatchToProps) (Employee)
export default employee;
