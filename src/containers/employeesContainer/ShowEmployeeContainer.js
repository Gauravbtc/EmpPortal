import ShowEmployee from '../../components/employees/ShowEmployee';
import { connect } from 'react-redux';
import { fetchEmployee, fetchEmployeeSuccess, fetchEmployeeFailure } from '../../actions/employee_action';

function mapStateToProps(state, ownProps){
  return{
    showEmployee: state.employees.showEmployee,
    id: ownProps.employeeId
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
    // resetMe: () => {
    //   //clean up both activeUser(currrently open) and deletedUser(open and being deleted) states
    //   dispatch(resetActiveUser());
    //   dispatch(resetDeletedUser());
    // }
  }
}
export default connect(mapStateToProps,matchDispatchToProps)(ShowEmployee)
