import EmployeeImport from '../../components/employees/EmployeeImport';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { importEmployee, importEmployeeSucess, importEmployeeFailure } from '../../actions/employee_action';

function mapStateToProps(state){
  return{
    importEmp: state.employees.importEmp
  }
}

function matchDispatchToProps(dispatch){
  return {
    importEmployee: (params) => {
      (dispatch(importEmployee(params)).payload)
        .then((response) => {
          console.log(response);
          if(response && response.status !== 200){
            dispatch(importEmployeeFailure(response.data));
          }
          else{
            dispatch(importEmployeeSucess(response.data));
          }
      })
    },
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(EmployeeImport);