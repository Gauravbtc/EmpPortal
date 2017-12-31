const INITIAL_STATE = { employeeList: {employees: [], error:null, loading: false},
							newEmployee: {employee:null, error: null, loading: false,success: false},
              showEmployee: {employee: null,error: null,loading: false},
							updateEmp: {employee:null, error: null, loading: false, success: false},
							deleteEmp: {employee: null,error: null,loading: false,success: false},
							importEmp: {employee_created: null,employeee_erros: null,error: null,loading: false,success: false}
						};

const employee = (state = INITIAL_STATE, action) => {
    let error;
  switch (action.type) {
    case "FETCH_EMPLOYEES":
        return {...state, employeeList: { employees: [], error: null, loading: true}}
    case "FETCH_EMPLOYEES_SUCCESS":
        return {...state, employeeList: { employees: action.payload, error: null, loading: false}}
    case "FETCH_EMPLOYEES_FAILURE":
        error = action.payload || {message: action.payload.message};
				return {...state, employeeList: { employees: [], error: error, loading: false}}				
		case "RESET_EMPLOYEES":
		return {...state, employeeList: { employees: [], error: null, loading: true}}

    case 'FETCH_EMPLOYEE':
       return {...state, showEmployee: { ...state.showEmployee, error: null, loading: true}}
    case 'FETCH_EMPLOYEE_SUCCESS':
      return {...state, showEmployee: { employee: action.payload, error: null, loading: false}}
    case 'FETCH_EMPLOYEE_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, showEmployee: { employee: null ,error: error , loading: false}}


		case 'CREATE_EMPLOYEE':
		   return {...state,newEmployee: {...state.newEmployee, error: null, loading: true,success: false}}
		case 'CREATE_EMPLOYEE_SUCCESS':
			 return {...state,newEmployee: { employee: action.payload,error: null,loading: false,success: true}}
		case 'CREATE_EMPLOYEE_FAILURE':
			error = action.payload || {message: action.payload.message};
		 	return {...state, newEmployee: { employee: null ,error: error , loading: false,success: false}}


		case 'UPDATE_EMPLOYEE':
		   return {...state,updateEmp: {...state.updateEmployee, error: null, loading: true,success: false}}
		case 'UPDATE_EMPLOYEE_SUCCESS':
			 return {...state,updateEmp: { employee: action.payload.user,error: null,loading: false,success: action.payload.success}}
		case 'UPDATE_EMPLOYEE_FAILURE':
			error = action.payload || {message: action.payload.error};
		 	return {...state, updateEmp: { employee: null ,error: error , loading: false,success: false}}
		case 'RESET_UPADTE_EMPLOYEE':
			 return {...state,updateEmp: {employee:null, error: null, loading: false, success: false}}


		case 'DELETE_EMPLOYEE':
			return {...state,deleteEmp: {...state.deleteEmp, error: null, loading: true,success: false}}
		case 'DELETE_EMPLOYEE_SUCCESS':
			return {...state,deleteEmp: {employee: action.payload.user, error: null, loading: false,success: action.payload.success}}
		case 'DELETE_EMPLOYEE_FAILURE':
			error = action.payload || {message: action.payload.error};
			return {...state, updateEmp: { employee: null ,error: error , loading: false,success: false}}
		case 'RESET_DELETE_EMPLOYEE':
			return {employeeList: { employees: action.employees, error: null, loading: false}}

		case 'IMPORT_EMPLOYEE':
			return {...state,importEmp: {employee_created: null,employeee_erros: null,error: null,loading: false,success: false}}
		case 'IMPORT_EMPLOYEE_SUCESSS':
			return {...state,importEmp: {employee_created: action.payload.users_created,employeee_erros: action.payload.users_errors,error: null,loading: false,success: true}}
		case 'IMPORT_EMPLOYEE_FAILURE':	
			error = action.payload || {message: action.payload.error};
			 return {...state, importEmp: { employee_created: null ,error: error , loading: false,success: false,employeee_erros: null}}
    default:
      return state
		}
}
export default employee;
