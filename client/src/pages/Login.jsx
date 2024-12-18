import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <h1 className='login'>Login Page</h1>
      <div className="signup"><p>if don't have a account</p><Link to='/register'>Sign up</Link></div>
    </>
  )
}

export default Login