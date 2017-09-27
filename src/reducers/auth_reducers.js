const INITIAL_STATE = { authenticate:false};

const auth = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "AUTHENTICATED":
      return { ...state,authenticate: true};
    case "UNAUTHENTICATED":
      return { ...state, authenticate: false};
    case "AUTHENTICATION_ERROR":
      return { ...state, authenticate: false}
    default: 
    return state
  }
}

export default auth;