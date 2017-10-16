const INITIAL_STATE ={
  loginUser: {user: null, error:null, loading: false,auth_token: null,message: null,success: false},
  signupUser: {user: null, error:null, loading: false,auth_token: null,message: null,success: false},
  userRole: {role: null,error:null, loading: false,message: null,success: false }
};

const users = (state = INITIAL_STATE, action) => {
  let error;

  switch (action.type) {
    case "USER_LOGIN":
      return {...state, loginUser: { user: null, error: null, loading: true,autch_token: null,message: null,success: false}}
    case "USER_LOGIN_SUCCESS":
      return {...state, loginUser: { user: action.payload.login_user, error: null, loading: false,auth_token: action.payload.auth_token,message: action.payload.message,success:  action.payload.success  }}
    case "USER_LOGIN_FAILURE":
      error = action.payload || {message: action.payload.message};
      return {...state, loginUser: { user: null, error: error, loading: false,autch_token: null,message: action.payload.message,success: action.payload.success}}

    case "USER_LOGOUT":
      return {...state, loginUser: { user: null, error: null, loading: true,message: null,success: false}}
    case "USER_LOGOUT_SUCCESS":
      return {...state, loginUser: { user: null, error: null, loading: false,message: action.payload.message,success: action.payload.success}}
    case "USER_LOGOUT_FAILURE":
      error = action.payload || {message: action.payload.message};
      return {...state, loginUser: { user: null, error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    case "RESET_LOGIN_USER":
      return {...state, loginUser: { user: null, error: null, loading: false,autch_token: null,message: null,success: false}}


    case "USER_SIGNUP":
      return {...state, signupUser: { user: null, error: null, loading: true,autch_token: null,message: null,success: false}}
    case "USER_SIGNUP_SUCCESS":
      return {...state, signupUser: { user:  action.payload.user, error: null, loading: false,message: action.payload.message,success: action.payload.success}}
    case "USER_SIGNUP_FAILURE":
      error = {message: action.payload.message}
      return {...state, signupUser: { user: null, error: error, loading: false,message: action.payload.message,success: action.payload.success}}


    case "USER_CONFIRMATION":
      return {...state, loginUser: { user: null, error: null, loading: true,autch_token: null,message: null,success: false}}
    case "USER_CONFIRMATION_SUCCESS":
      return {...state, loginUser: { user: action.payload.login_user, error: null, loading: false,auth_token: action.payload.auth_token,message: action.payload.message,success:  action.payload.success  }}
    case "USER_CONFIRMAION_FAILURE":
      error = action.payload || {message: action.payload.message};
      return {...state, loginUser: { user: null, error: error, loading: false,autch_token: null,message: action.payload.message,success: action.payload.success}}
   
    
    case "USER_FORGOT_PASSWORD": 
      return {...state, loginUser: { user: null, error: null, loading: true,autch_token: null,message: null,success: false}}
    case "USER_FORGOT_PASSWORD_SUCCESS": 
      return {...state, loginUser: { user: action.payload.login_user, error: null, loading: false,auth_token: null,message: action.payload.message,success:  action.payload.success  }}
    case "USER_FORGOT_PASSWORD_FAILURE":
      error = action.payload || {message: action.payload.message};
      return {...state, loginUser: { user: null, error: error, loading: false,autch_token: null,message: action.payload.message,success: action.payload.success}}
     

    case "USER_PASSWORD_NEW":
      return {...state, loginUser: { user: null, error: null, loading: true,autch_token: null,message: null,success: false}}
    case "USER_FORGOT_PASSWORD_NEW_SUCCESS":
      return {...state, loginUser: { user: action.payload.login_user, error: null, loading: false,auth_token: action.payload.auth_token,message: action.payload.message,success:  action.payload.success  }}
    case "USER_FORGOT_PASSWORD_NEW_FAILURE":
       error = action.payload || {message: action.payload.message};
       return {...state, loginUser: { user: null, error: error, loading: false,autch_token: null,message: action.payload.message,success: action.payload.success}}
   

    case "AUTH_USER":
      return {...state, loginUser: { user: null, error: null, loading: true,autch_token: null,message: null,success: false}}
    case "AUTH_USER_SUCCESS":
      return {...state, loginUser: { user: action.payload.login_user, error: null, loading: false,auth_token: action.payload.auth_token,message: action.payload.message,success:  action.payload.success  }}
    case "AUTH_USER_FAILURE":
      return {...state, loginUser: { user: action.payload.login_user, error: null, loading: false,auth_token: action.payload.auth_token,message: action.payload.message,success:  action.payload.success  }}
    

    case "FETCH_ROLE":
      return {...state, userRole: { role: null, error: null, loading: true,message: null,success: false}}
    case "FETCH_ROLE_SUCCESS":
      return {...state, userRole: { role: action.payload.role, error: null, loading: false,message: action.payload.message,success: action.payload.success}}
    case "FETCH_ROLE_FAILURE":
      error = action.payload || {message: action.payload.message};
      return {...state, userRole: { role: null, error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    
    default:
      return state
  }
}
export default users;
