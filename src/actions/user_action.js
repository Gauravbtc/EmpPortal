import axios from 'axios';

export function userLogin(params){
  const request = axios({
    method: 'post',
    url: 'http://localhost:3005/v1/m_users/sign_in',
    data: params,
    headers: []

  });
  return {
    type: "USER_LOGIN",
    payload: request
  }
}

export function userLoginSuccess(user){
  return{
      type: "USER_LOGIN_SUCCESS",
      payload: user
  }
}


export function userLoginFailure(err){
  console.log(err)
  return{
    type: "USER_LOGIN_FAILURE",
    payload: err
  }
}