import { combineReducers } from 'redux'
import employee from './employee_reducers'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  employees: employee,
  form: formReducer
})
export default rootReducer
