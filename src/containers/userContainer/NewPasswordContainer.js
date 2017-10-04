import NewPassword from '../../components/users/NewPassword'
import { connect } from 'react-redux';
import { userPasswordNew,userPasswordNewSuccess,userPasswordNewFailure} from '../../actions/user_action';
import {authenticated,unauthenticated,authenticated_error} from '../../actions/auth_action';

function mapStateToProps(state, ownProps){
    return{
      loginUser: state.user.loginUser,
      params: ownProps
    }
  }  

function matchDispatchToProps(dispatch){
  return {
    userPasswordNew: (params) => {
      (dispatch(userPasswordNew(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(userPasswordNewSuccess(response.data));
            dispatch(authenticated());
            localStorage.setItem('user', response.data.auth_token);
          }
          else{
            dispatch(userPasswordNewFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(userPasswordNewFailure(err))
        })
      },
    }
  }


export default connect(mapStateToProps,matchDispatchToProps)(NewPassword)