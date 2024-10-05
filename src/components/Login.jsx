import React, { useRef } from 'react'
import Header from './Header';
import BgImg from "../utils/Images/bg-image.jpg";
import { useState } from 'react';
import { checkValidData } from '../utils/Images/validate';

const Login = () => {
 const [isSignInForm,setIsSignInForm]=useState(true);
 const [errorMessage,setErrorMessage]=useState(null);

 const name=useRef(null);
 const email=useRef(null);
 const password=useRef(null);

 const handleButtonClick=()=>{
    //validate the form data 
    //  console.log(email.current.value);
    //  console.log(password.current.value);
    const message= checkValidData(name.current.value,email.current.value,password.current.value);
    setErrorMessage(message);


 }


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
            <form onSubmit={(e)=>e.preventDefault()} 
            className='p-12 bg-black bg-opacity-90  absolute w-3/12 my-40 mx-auto right-0 left-0 text-white'>
            <h1 className='font-bold text-3xl p-4'>{isSignInForm? "Sign In":"Sign Up"}</h1>
            {!isSignInForm &&<input  ref={name} type="text" placeholder='Full Name' className='p-2 m-2 w-full bg-zinc-800' />}
                <input ref={email} type="text" placeholder='Email or Phone'  className='p-2 m-2 w-full bg-zinc-800'/>
                
                <input ref={password} type="password" placeholder='password' className='p-2 m-2 w-full bg-zinc-800' />
                <p className='text-red-600 p-2'>{errorMessage}</p>
                <button className='p-2 m-2 mt-5 bg-red-700 w-full text-xl rounded-lg 'onClick={handleButtonClick}> {isSignInForm? "Sign In":"Sign Up"}</button>
                <p className='py-6 ml-3 cursor-pointer hover:border-b-2'onClick={toggleSignInpForm}>{isSignInForm? "New to Netflix? Sign Up Now":"Already Registered: Sign In"}</p>

               
            </form>
        </div>
    </div>
  )
}

export default Login;