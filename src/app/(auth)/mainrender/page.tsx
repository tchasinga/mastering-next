import React from 'react'
import Login from '../login/page'
import ForgetPassword from '../forget-password/page'
import Register from '../register/page'

export default function page() {
  return (
    <div className='flex-col flex justify-center items-center'>
      <h1>This is the main render page</h1>
      <Login/>
      <ForgetPassword />
      <Register />
    </div>
  )
}
