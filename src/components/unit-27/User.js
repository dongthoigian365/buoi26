import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser as setUserAction, getInfo as getInfoAction } from './../../redux/actions/user'
import { fetchUser } from './../../api/user'

const User = () => {
  const dispatch = useDispatch()

  const getInfo = () => {
    dispatch(getInfoAction('comments'))
  }


  useEffect(() => {
    fetchUser(3)
    .then(response => {
      dispatch(setUserAction(response.data))
    })
  }, [])

  return (
    <>
      <h1>Current user</h1>
      <button onClick={getInfo}>Get info</button>
    </>
  )
}

export default User
