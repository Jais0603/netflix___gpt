import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div>
    <Header/>
    <div className='absolute' >
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg
"alt='bg-logo'/>
    </div>
    <form className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
        <h1 className='font-bold text-3xl py-4'>
        {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

       { !isSignInForm && 
       <input type="text" placeholder='Username'
        className='p-4 my-4 w-full bg-gray-700 '></input>}

        <input type="text" placeholder='Email or Phone number'
        className='p-4 my-4 w-full bg-gray-700 '></input>

        <input type="password" placeholder='Password'
        className='p-4 my-4 w-full bg-gray-700 '></input>

        <button className='p-4 my-7 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign up Now" : "Already a user? Sign In "}</p>
    </form>
    </div>
    
  ); 
};

export default Login
