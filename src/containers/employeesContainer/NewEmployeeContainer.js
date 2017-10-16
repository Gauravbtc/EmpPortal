import NewEmployee from '../../components/employees/NewEmployee';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createEmployee, createEmployeeSuccess, createEmployeeFailure } from '../../actions/employee_action';
import {fetchRole,fetchRoleSuccess,fetchRoleFailure} from '../../actions/user_action';
function mapStateToProps(state, ownProps){
  //console.log(state.user.loginUser)
  return{
    newEmployee: state.employees.newEmployee,
    loginUser: state.user.loginUser,
    userRole: state.user.userRole.role,
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
    fetchRole: ()=>{
      (dispatch(fetchRole).payload)
      .then((response) =>{
        if(response && response.status == 200){
          dispatch(fetchRoleSuccess(response.data))
        }
        else{
          dispatch(fetchRoleFailure(response.data))
        }
      })
    }
  }
}
export default withRouter(connect(mapStateToProps,matchDispatchToProps)(NewEmployee));
