import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
  const count = useSelector(store => store)
  console.log(count)

  return (
    <>
      <h1>Su dung redux</h1>
    </>
  )
}

export default Counter