import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);
  return <>
    <div className='absolute'>
      <Header />
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/8e8ff9d3-17b4-4ce1-b571-06ba4e025cca/web_tall_panel/IN-en-20241125-TRIFECTA-perspective_fe8a8dbc-e13a-452e-a9c6-284b08c4f974_large.jpg'
        alt='Netflix Background' />
    </div>
    <form className='w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white absolute bg-[rgba(0,0,0,0.8)]'>
      <h1 className='text-3xl font-bold pb-6'>{isSignInForm ? "Sign In" :"Sign Up"}</h1>
      {!isSignInForm && <input type="text" placeholder='Username' className='px-4 py-4 w-full border-[0.3px] border-white bg-transparent rounded-md mb-4' />}
      <input type="text" placeholder='Email or mobile number ' className='px-4 py-4 w-full border-[0.3px] border-white bg-transparent rounded-md mb-4' />
      <input type="password" placeholder='Password' className='px-4 py-4 w-full border-[0.1px] border-white bg-transparent rounded-md ' />
      <button className='h-[40px]  my-6 w-full bg-red-800 text-white rounded-md'>{isSignInForm ? "Sign In" :"Sign Up"}</button>
      <p className='py-4 text-[rgba(255,255,255,0.7)]'>{isSignInForm ? "New to Netflix?" :"Already registered?"} <span className=' text-white text-bold hover:cursor-pointer hover:underline' onClick={toggleSignInForm}>{isSignInForm ? "Sign In" :"Sign Up"} now</span></p>
    </form>
  </>
}

export default Login