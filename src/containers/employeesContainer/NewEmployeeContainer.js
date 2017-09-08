import EmployeeForm from '../../components/employees/EmployeeForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import { createEmployee, createEmployeeSuccess, createEmployeeFailure } from '../../actions/employee_action';

function mapStateToProps(state, ownProps){
  //console.log("hhh"+ JSON.stringify(state.employees.newEmployee));
  return{
    newEmployee: state.employees.newEmployee,
    params: ownProps
  }
}

function matchDispatchToProps(dispatch){
  return {
    createEmployee: (params) => {
      (dispatch(createEmployee(params)).payload)
        .then((response) => {
          if(response && response.status !== 200){
            dispatch(createEmployeeFailure(response.data));
          }
          else{
            dispatch(createEmployeeSuccess(response.data));
            // {this.props.history.push("/employee")}
            // <Redirect to="/employee" />
          }
      })
    },
  }
}
export default withRouter(connect(mapStateToProps,matchDispatchToProps)(EmployeeForm));
