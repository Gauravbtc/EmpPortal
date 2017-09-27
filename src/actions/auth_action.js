export function authenticated(){
    return{
      type: "AUTHENTICATED"
    }
  }  

export function unauthenticated(){
  return{
    type: "UNAUTHENTICATED"
  }
}  

export function authenticated_error(){
  return{
    type: "AUTHENTICATION_ERROR"
  }
}  