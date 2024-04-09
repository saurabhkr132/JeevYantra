"use client"
import React from 'react'
import { useEffect } from 'react'

const error = () => {
  useEffect(() => {
    console.log(error);
  }, [error])
  
  return (
    <>
    <div className='error'>
      <h2>Something went wrong!</h2>
      <button className='error-btn' onClick={
        () => reset()
      }>Try Again</button>
    </div>
    </>
  )
}

export default error