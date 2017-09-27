import LoginUser from '../../components/users/LoginUser';
import { connect } from 'react-redux';
import { userLogin, userLoginSuccess,userLoginFailure,userLogoutSuccess} from '../../actions/user_action';
import {authenticated,unauthenticated,authenticated_error} from '../../actions/auth_action';

function mapStateToProps(state, ownProps){
    return{
      loginUser: state.user.loginUser,
      params: ownProps
    }
  }

function matchDispatchToProps(dispatch){
  return {
    userLogin: (params) => {
      (dispatch(userLogin(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(userLoginSuccess(response.data));
            dispatch(authenticated());
            localStorage.setItem('user', response.data.auth_token);   
          }
          else{
            dispatch(userLoginFailure(response.data));
            dispatch(unauthenticated());
          }
        })
        .catch((err)=>{
          dispatch(userLoginFailure(err.response.data))
          dispatch(authenticated_error());
        })
      },
    }
  }
export default connect(mapStateToProps,matchDispatchToProps)(LoginUser)
