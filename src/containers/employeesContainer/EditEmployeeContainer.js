import EditEmployee from '../../components/employees/EditEmployee';
import { connect } from 'react-redux';
import { fetchEmployee, fetchEmployeeSuccess, fetchEmployeeFailure,updateEmployee,updateEmployeeSuccess,updateEmployeeFailure,resetEmployeeUpdate } from '../../actions/employee_action';
import {fetchRole,fetchRoleSuccess,fetchRoleFailure} from '../../actions/user_action';

function mapStateToProps(state, ownProps){
  return{
    editEmployee: state.employees.showEmployee,
    id: ownProps.employeeId,
    params: ownProps,
    updateEmp: state.employees.updateEmp,
    userRole: state.user.userRole.role

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
    fetchRole: () => {
      (dispatch(fetchRole).payload)
      .then((response) =>{
        if(response && response.status == 200){
          dispatch(fetchRoleSuccess(response.data))
        }
        else{
          dispatch(fetchRoleFailure(response.data))
        }
      })
    },
    resetMe: () => {
      dispatch(resetEmployeeUpdate());
    }
  }
}
export default connect(mapStateToProps,matchDispatchToProps)(EditEmployee)
