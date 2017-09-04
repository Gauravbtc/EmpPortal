import axios from 'axios';
  export const fetchEmployees = () =>{
    const request = axios({
      method: 'get',
      url: `http://localhost:3005/v1/users`,
      headers: []
    });

    return {
      type: "FETCH_EMPLOYEES",
      payload: request
    }
  }

  export const fetchEmployeesSuccess = (employees) =>{
  return{
    type: "FETCH_EMPLOYEES_SUCCESS",
    payload: employees
  }
}



export const fetchEmployeesFailure = (err) =>{
  return{
    type: "FETCH_EMPLOYEES_FAILURE",
    payload: err
  }
}


export const fetchEmployee = (id) =>{
  const request = axios.get(`http://localhost:3005/v1/users/${id}`)
  return {
    type: "FETCH_EMPLOYEE",
    payload: request
  }
}


export const fetchEmployeeSuccess = (employee) =>{
  return {
      type: "FETCH_EMPLOYEE_SUCCESS",
      payload: employee
    }
}


export const fetchEmployeeFailure = (err) =>{
  return {
    type: "FETCH_EMPLOYEE_FAILURE",
    payload: err
  }
}


export const gaurav = () => {
  console.log("hh");
  return {

  }
}
