import React from 'react'
import Counter from './components/unit-27/Counter'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App
