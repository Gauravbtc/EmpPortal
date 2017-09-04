import Employee from '../../components/employees/Employee';
import { connect } from 'react-redux';
import { fetchEmployees,fetchEmployeesSuccess,fetchEmployeesFailure } from '../../actions/employee_action';


function mapStateToProps(state){
  return{
    employeeList: state.employees.employeeList
  }
}



function matchDispatchToProps(dispatch){
  return {
    fetchEmployees: () => {
      (dispatch(fetchEmployees()).payload)
        .then((response) => {
          !response.error ? dispatch(fetchEmployeesSuccess(response.data)) : dispatch(fetchEmployeesFailure(response.data));
        })
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps) (Employee);
