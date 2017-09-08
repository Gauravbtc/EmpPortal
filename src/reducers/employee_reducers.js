const INITIAL_STATE = { employeeList: {employees: [], error:null, loading: false},
							newEmployee: {employee:null, error: null, loading: false},
              showEmployee: {employee: null,error: null,loading: false}
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

    case 'FETCH_EMPLOYEE':
       return {...state, showEmployee: { ...state.showEmployee, error: null, loading: true}}
    case 'FETCH_EMPLOYEE_SUCCESS':
      return {...state, showEmployee: { employee: action.payload, error: null, loading: false}}
    case 'FETCH_EMPLOYEE_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, showEmployee: { employee: null ,error: error , loading: false}}


		case 'CREATE_EMPLOYEE':
		   return {...state,newEmployee: {...state.newEmployee, error: null, loading: true}}
		case 'CREATE_EMPLOYEE_SUCCESS':
			 return {...state,newEmployee: { employee: action.payload,error: null,loading: false, success: true}}
		case 'CREATE_EMPLOYEE_FAILURE':
			error = action.payload || {message: action.payload.message};
		 	return {...state, newEmployee: { employee: null ,error: error , loading: false}}

    default:
      return state
		}
}
export default employee;
