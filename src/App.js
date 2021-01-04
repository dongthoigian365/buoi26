import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import 'antd/dist/antd.css'

import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import Users from './pages/Users'

const App = () => {

  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/" exact>
              <Home />
            </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/users">
            <Users />
          </Route>

          {/* <Route path="/user">
            <User />
          </Route> */}
      </Switch>
    </Router>
  </>
  )
}

export default App
