import EditEmployee from '../../components/employees/EditEmployee';
import { connect } from 'react-redux';
import { fetchEmployee, fetchEmployeeSuccess, fetchEmployeeFailure,updateEmployee,updateEmployeeSuccess,updateEmployeeFailure,resetEmployeeUpdate } from '../../actions/employee_action';

function mapStateToProps(state, ownProps){
  return{
    editEmployee: state.employees.showEmployee,
    id: ownProps.employeeId,
    params: ownProps,
    updateEmp: state.employees.updateEmp
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchEmployee: (id) => {
      (dispatch(fetchEmployee(id)).payload)
        .then((response) => {
          if(response && response.status !== 200){
            dispatch(fetchEmployeeFailure(response.data));
          }
          else{
            dispatch(fetchEmployeeSuccess(response.data));
          }
      })
    },
    updateEmployee: (params) => {
      (dispatch(updateEmployee(params)).payload)
        .then((response) => {
          if(response && response.status !== 200){
            dispatch(updateEmployeeFailure(response.data));
          }
          else{
            dispatch(updateEmployeeSuccess(response.data));
          }
      })
    },

    resetMe: () => {
      dispatch(resetEmployeeUpdate());
    }
  }
}
export default connect(mapStateToProps,matchDispatchToProps)(EditEmployee)
