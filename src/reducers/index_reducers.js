import { combineReducers } from 'redux'
import employee from './employee_reducers'
import users from './user_reducers'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  employees: employee,
  user: users,
  form: formReducer
})
export default rootReducer
