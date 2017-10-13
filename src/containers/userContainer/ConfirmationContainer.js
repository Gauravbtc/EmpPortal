import Confirmation from '../../components/users/Confirmation'
import { connect } from 'react-redux';
import { userConfirmation,userConfirmationSuccess,userConfirmationFailure} from '../../actions/user_action';
import {authenticated} from '../../actions/auth_action';

function mapStateToProps(state, ownProps){
    return{
      loginUser: state.user.loginUser,
      token: ownProps
    }
  }  

function matchDispatchToProps(dispatch){
  return {
    userConfirmation: (token) => {
      (dispatch(userConfirmation(token)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(userConfirmationSuccess(response.data));
            dispatch(authenticated());
            localStorage.setItem('user', response.data.auth_token);   
          }
          else{
            dispatch(userConfirmationFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(userConfirmationFailure(err))
        })
      },
    }
  }


export default connect(mapStateToProps,matchDispatchToProps)(Confirmation)