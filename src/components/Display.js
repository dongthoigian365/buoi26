import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
  const count = useSelector(store => store.counterReducer)
  console.log(count)

  return (
    <>
      <h1>Count: </h1>
    </>
  )
}

export default Display
