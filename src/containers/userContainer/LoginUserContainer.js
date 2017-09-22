import LoginUser from '../../components/users/LoginUser';
import { connect } from 'react-redux';
import { userLogin, userLoginSuccess,userLoginFailure } from '../../actions/user_action';


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
          }
          else{
            dispatch(userLoginFailure(response.data));
          }
        })
        .catch((err)=>{
          console.log(err)
          dispatch(userLoginFailure(err.response.data))
        })
      },
    }
  }
export default connect(mapStateToProps,matchDispatchToProps)(LoginUser)
