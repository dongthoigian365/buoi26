import React from 'react'
import { useDispatch } from 'react-redux'
import { increment as incrementAction } from './../../redux/actions/counter'

const Counter = () => {
  const dispatch = useDispatch()
  const increment = () => {
    dispatch(incrementAction())
  }

  return (
    <>
      <h1>Su dung redux</h1>
      <button onClick={increment}>INCREMENT</button>
    </>
  )
}

export default Counter