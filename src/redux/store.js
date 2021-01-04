import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const myMiddleware = applyMiddleware(thunk)
const myCompose = compose(
  myMiddleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

const  store = createStore(
  rootReducer,
  myCompose
  )

export default store
