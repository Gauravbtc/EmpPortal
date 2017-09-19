import axios from 'axios';

export const employeeList = () =>{
    return {
      type: "EMPLOYEE_LIST",
      payload: employee_data
    }
}

export const defaultEmp = (payload) =>{
   return {
     type: "DEFAULT_EMP",
     payload
   }
}

  const employee_data = [
    {id: 1, firstname: 'Gaurav', lastname: 'Makwana', age: '23', city: 'Cambay'},
    {id: 2, firstname: 'Maimit', lastname: 'Patel', age: '25', city: 'Baroda'},
  ];


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

  export const fetchEmployeesSuccess = (users) =>{
  return{
    type: "FETCH_EMPLOYEES_SUCCESS",
    payload: users
  }
}



export const fetchEmployeesFailure = (err) =>{
  return{
    type: "FETCH_EMPLOYEES_FAILURE",
    payload: err
  }
}

//Feeach employee detail


export function fetchEmployee(id){
  const request = axios.get(`http://localhost:3005/v1/users/${id}`)
  return {
    type: "FETCH_EMPLOYEE",
    payload: request
  }
}


export function fetchEmployeeSuccess(showemployee){
  return {
      type: "FETCH_EMPLOYEE_SUCCESS",
      payload: showemployee
    }
}


export function fetchEmployeeFailure(err){
  return {
    type: "FETCH_EMPLOYEE_FAILURE",
    payload: err
  }
}



export function createEmployee(params){
  const request = axios({
    method: 'post',
    url: 'http://localhost:3005/v1/users',
    data: params,
    headers: []

  });

  return {
    type: "CREATE_EMPLOYEE",
    payload: request
  }
}


export function createEmployeeSuccess(newemployee){
  return {
      type: "CREATE_EMPLOYEE_SUCCESS",
      payload: newemployee
    }
}

export function createEmployeeFailure(err){
  return {
      type: "CREATE_EMPLOYEE_FAILURE",
      payload: err
    }
}


export function updateEmployee(params){
  const request = axios({
    method: 'put',
    url: `http://localhost:3005/v1/users/${params.id}`,
    data: params,
    headers: []
  });

  return {
    type: "UPDATE_EMPLOYEE",
    payload: request
  }
}



export function updateEmployeeSuccess(employee){
  return {
    type: "UPDATE_EMPLOYEE_SUCCESS",
    payload: employee
  }
}


export function updateEmployeeFailure(err){
  return{
    type: "UPADTE_EMPLOYEE_FAILURE",
    payload: err
  }
}

export function resetEmployeeUpdate(){
  return {
    type: "RESET_UPADTE_EMPLOYEE"
  }
}


export function deleteEmployee(id){
  const request = axios({
    method: 'delete',
    url: `http://localhost:3005/v1/users/${id}`,
    headers: []
  });

  return {
    type: "DELETE_EMPLOYEE",
    payload: request
  }
}


export function deleteEmployeeSuccess(id,deletedEmployee,employeesList){
  let user = employeesList.find(function(employee){
      return employee.id === id
    })
  employeesList.splice(employeesList.indexOf(user),1)
  return{
    type: 'DELETE_EMPLOYEE_SUCCESS',
    payload: deletedEmployee,
    employess: employeesList
  }
}
export function deleteEmployeeFailure(err){
  return{
    type: 'DELETE_EMPLOYEE_FAILURE',
    payload: err
  }
}

export function resetDeleteEmployee(employess){
  return({
    type: "RESET_DELETE_EMPLOYEE",
    payload: employess
  })
}
