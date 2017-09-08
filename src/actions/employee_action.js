import axios from 'axios';

export function hello(){
  console.log("call hello function")
}

export const addEmp = (params) =>{
  console.log("action"+ params)
  return {
  type: 'ADD_EMP',
  params
}
}

export const editEmp = (text) =>({
  type: 'EDIT_EMP',
  text
})


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





// export function fetchEmployeeSuccess(user){
//   return {
//     type: "FETCH_EMPLOYEE_SUCCESS",
//     payload: user
//   }
// }

// export function fetchEmployeeFailure(err){
//   return {
//     type: "FETCH_EMPLOYEE_FAILURE",
//     payload: err
//   }
// }
