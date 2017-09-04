import { combineReducers } from 'redux'
import employee from './employee_reducers'

const rootReducer = combineReducers({
  employees: employee
})

export default rootReducer
