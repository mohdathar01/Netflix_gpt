import React from 'react'
import Header from './Header';
import BgImg from "../utils/Images/bg-image.jpg"

const Login = () => {
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img className="h-screen w-screen"  src={ BgImg} alt="" />
        </div>
        <div>
            <form className='p-12 bg-black bg-opacity-90  absolute w-3/12 my-40 mx-auto right-0 left-0 text-white'>
            <h1 className='font-bold text-3xl p-4'>Sign In</h1>
                <input type="text" placeholder='Email or Phone'  className='p-2 m-2 w-full bg-zinc-800'/>
                <input type="password" placeholder='password' className='p-2 m-2 w-full bg-zinc-800' />
                <button className='p-2 m-2 mt-5 bg-red-700 w-full text-xl rounded-lg '> Sign In</button>
                <p className='py-6 ml-3'>New to Netflix? Sign Up Now</p>

               
            </form>
        </div>
    </div>
  )
}

export default Login;