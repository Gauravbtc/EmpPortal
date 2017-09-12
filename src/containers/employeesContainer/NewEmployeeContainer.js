import NewEmployee from '../../components/employees/NewEmployee';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
          }
      })
    },
  }
}
export default withRouter(connect(mapStateToProps,matchDispatchToProps)(NewEmployee));
