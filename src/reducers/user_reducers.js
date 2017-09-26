const INITIAL_STATE ={ 
  loginUser: {user: null, error:null, loading: false,auth_token: null,message: null,success: false},
  logoutUser: {user: null,error:null, loading: false,message: null,success: false}
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
      return {...state, logoutUser: { user: null, error: null, loading: true,message: null,success: false}}
    case "USER_LOGOUT_SUCCESS":
      return {...state, logoutUser: { user: action.payload.user, error: null, loading: false,message: action.payload.message,success: action.payload.success}}
    case "USER_LOGOUT_FAILURE":
      error = action.payload || {message: action.payload.message};
      return {...state, loginUser: { user: null, error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    
    default:
      return state
  }
}
export default users;

