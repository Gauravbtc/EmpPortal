import EditEmployee from '../../components/employees/EditEmployee';
import { connect } from 'react-redux';
import { fetchEmployee, fetchEmployeeSuccess, fetchEmployeeFailure } from '../../actions/employee_action';

function mapStateToProps(state, ownProps){
  return{
    editEmployee: state.employees.showEmployee,
    id: ownProps.employeeId,
    params: state.employees.showEmployee.employee
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
    }
  }
}
export default connect(mapStateToProps,matchDispatchToProps)(EditEmployee)
