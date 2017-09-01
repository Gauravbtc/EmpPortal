import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchEmployee ,fetchEmployeeSuccess,fetchEmployeeFailure } from '../../actions/employee_action';



class ShowEmployee extends Component{
  componentDidMount(){
      this.props.fetchEmployee(this.props.match.params.id);
    }

  render(){
    if(!this.props.employee){
      return <span />
    }
    return(
      <div>
        <p>First Name: {this.props.employee.firstname}</p>
        <p>Last Name: {this.props.employee.lastname}</p>
        <p>Gender: {this.props.employee.gender}</p>
        <p>EMail: {this.props.employee.email} </p>
      </div>
    );
  }
}


function mapStateToProps(state, props){
  return{
    employee: state.employee.showEmployee.employee
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchEmployee: (id) => {
      (dispatch(fetchEmployee(id)).payload).then((response) => {
        if(response && response.status !== 200)
          {dispatch(fetchEmployeeFailure(response.data));}
        else
          {dispatch(fetchEmployeeSuccess(response.data));}
      })
    }
  }
}

const show_employee = connect(mapStateToProps,matchDispatchToProps) (ShowEmployee)
export default show_employee;
