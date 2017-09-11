import Employee from '../../components/employees/Employee';
import { connect } from 'react-redux';
import { fetchEmployees,fetchEmployeesSuccess,fetchEmployeesFailure,deleteEmployee,deleteEmployeeSuccess,deleteEmployeeFailure,resetDeleteEmployee } from '../../actions/employee_action';

function mapStateToProps(state){
  return{
    employeeList: state.employees.employeeList,
    deletedEmployee: state.employees.deleteEmp
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchEmployees: () =>{
    (dispatch(fetchEmployees()).payload)
      .then((response) => {
        !response.error ? dispatch(fetchEmployeesSuccess(response.data)) : dispatch(response.data)
      })
    },
    deleteEmployee: (id,employeeList) => {
      // if authentication tokan are there then check it before "dispatch deleteUser()"
      (dispatch(deleteEmployee(id)).payload)
        .then((response) =>{
          !response.error ?  dispatch(deleteEmployeeSuccess(id,response.data,employeeList)) : dispatch(deleteEmployeeFailure(response.data))
        })
    },
    resetMe: () =>{
      dispatch(resetDeleteEmployee());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Employee);
