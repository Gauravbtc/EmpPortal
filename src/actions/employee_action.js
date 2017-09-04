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
