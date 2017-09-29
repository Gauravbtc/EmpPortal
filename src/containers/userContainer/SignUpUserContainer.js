import SignUpUser from '../../components/users/SignUpUser'
import { connect } from 'react-redux';
import { userSignUp, userSignUpSuccess,userSignUpFailure} from '../../actions/user_action';


function mapStateToProps(state, ownProps){
    return{
      signupUser: state.user.signupUser,
      params: ownProps
    }
  }  

function matchDispatchToProps(dispatch){
  return {
    userSignUp: (params) => {
      (dispatch(userSignUp(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(userSignUpSuccess(response.data));
          }
          else{
            dispatch(userSignUpFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(userSignUpFailure(err))
        })
      },
    }
  }

export default connect(mapStateToProps,matchDispatchToProps)(SignUpUser)