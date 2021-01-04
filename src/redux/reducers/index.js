import { combineReducers } from 'redux'
import counterReducer from './counter'
import userReducer from './user'

const rootReducer = combineReducers({
   counterReducer,
   userReducer
})

export default rootReducer
