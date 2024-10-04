import React from 'react'
import Header from './Header';
import BgImg from "../utils/Images/bg-image.jpg";
import { useState } from 'react';

const Login = () => {
 const[isSignInForm,setIsSignInForm]=useState(true);


    const toggleSignInpForm=()=>{
        setIsSignInForm(!isSignInForm);

    }
 


  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img className="h-screen w-screen"  src={ BgImg} alt="" />
        </div>
        <div>
            <form className='p-12 bg-black bg-opacity-90  absolute w-3/12 my-40 mx-auto right-0 left-0 text-white'>
            <h1 className='font-bold text-3xl p-4'>{isSignInForm? "Sign In":"Sign Up"}</h1>
                <input type="text" placeholder='Email or Phone'  className='p-2 m-2 w-full bg-zinc-800'/>
                {!isSignInForm &&<input type="text" placeholder='Full Name' className='p-2 m-2 w-full bg-zinc-800' />}
                <input type="password" placeholder='password' className='p-2 m-2 w-full bg-zinc-800' />
                <button className='p-2 m-2 mt-5 bg-red-700 w-full text-xl rounded-lg '> {isSignInForm? "Sign In":"Sign Up"}</button>
                <p className='py-6 ml-3 cursor-pointer'onClick={toggleSignInpForm}>{isSignInForm? "New to Netflix? Sign Up Now":"Already Registered: Sign In"}</p>

               
            </form>
        </div>
    </div>
  )
}

export default Login;