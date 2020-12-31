import React from 'react'
import Counter from './components/unit-27/Counter'
import { Provider } from 'react-redux'
import store from './redux/store'
import Display from './components/Display'

const App = () => { 

  return (
    <Provider store={store}>
      <Counter />
      <Display />
    </Provider>
  )
}

export default App
