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


export function userLogout(token){
  const request = axios({
    method: 'delete',
    url: 'http://localhost:3005/v1/m_users/sign_out',
    headers: {'auth_token': token}
  });

  return {
    type: "USER_LOGOUT",
    payload: request
  }
}

export function userLogoutSuccess(user){
  return{
    type: "USER_LOGOUT_SUCCESS",
    payload: user
  }
}

export function userLogoutFailure(err){
  return{
    type: "USER_LOGOUT_FAILURE",
    payload: err
  }
}

export function resetloginUser(){
  return{
    type: "RESET_LOGIN_USER"
  }
}


export function userSignUp(params){
  const request = axios({
    method: 'post',
    url: 'http://localhost:3005/v1/m_users',
    data: params,
    headers: []

  });
  return {
    type: "USER_SIGNUP",
    payload: request
  }
}

export function userSignUpSuccess(user){
  return{
    type: "USER_SIGNUP_SUCCESS",
    payload: user
  }
}

export function userSignUpFailure(err){
  return{
    type: "USER_SIGNUP_FAILURE",
    payload: err
  }
}


export function userConfirmation(token){
  const request = axios({
    method: 'get',
    url: `http://localhost:3005/v1/m_users/confirmation?confirmation_token=${token}`,
    headers: []
  });

  return {
    type: "USER_CONFIRMATION",
    payload: request
  }
}


export function userConfirmationSuccess(user){
  return{
    type: "USER_CONFIRMATION_SUCCESS",
    payload: user
  }
}

export function userConfirmationFailure(err){
  return{
    type: "USER_CONFIRMAION_FAILURE",
    payload: err
  }
}


export function userForgotPassword(params){
  const request = axios({
    method: 'post',
    url: 'http://localhost:3005/v1/m_users/password',
    data: params,
    headers: []

  });
  return {
    type: "USER_FORGOT_PASSWORD",
    payload: request
  }
}



export function userForgotPasswordSuccess(user){
  return{
    type: "USER_FORGOT_PASSWORD_SUCCESS",
    payload: user
  }
}



export function userForgotPasswordFailure(err){
  return{
    type: "USER_FORGOT_PASSWORD_FAILURE",
    payload: err
  }
}

export function userPasswordNew(params){
  const request = axios({
    method: 'put',
    url: 'http://localhost:3005/v1/m_users/password',
    data: params,
    headers: []

  });
  return {
    type: "USER_PASSWORD_NEW",
    payload: request
  }
}

export function userPasswordNewSuccess(user){
  return{
    type: "USER_FORGOT_PASSWORD_NEW_SUCCESS",
    payload: user
  }
}


export function userPasswordNewFailure(err){
  return{
    type: "USER_FORGOT_PASSWORD_NEW_FAILURE",
    payload: err
  }
}