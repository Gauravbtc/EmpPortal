import ForgotPassword from '../../components/users/ForgotPassword'
import { connect } from 'react-redux';
import { userForgotPassword,userForgotPasswordSuccess,userForgotPasswordFailure} from '../../actions/user_action';


function mapStateToProps(state, ownProps){
    return{
      loginUser: state.user.loginUser,
      params: ownProps
    }
  }  

function matchDispatchToProps(dispatch){
  return {
    userForgotPassword: (params) => {
      (dispatch(userForgotPassword(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(userForgotPasswordSuccess(response.data));
          }
          else{
            dispatch(userForgotPasswordFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(userForgotPasswordFailure(err))
        })
      },
    }
  }


export default connect(mapStateToProps,matchDispatchToProps)(ForgotPassword)