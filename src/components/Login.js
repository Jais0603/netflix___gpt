import React from 'react'
import Header from './Header';

const Login = () => {
  return (
    <div>
    <Header/>
    <div className='absolute' >
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg
"alt='bg-logo'/>
    </div>
    <form className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
        <input type="text" placeholder='Email or Phone number'
        className='p-2 my-2 w-full bg-gray-700 rounded-lg'></input>
        <input type="password" placeholder='Password'
        className='p-2 my-2 w-full bg-gray-700 rounded-lg'></input>
        <button className='p-4 my-7 bg-red-700 w-full rounded-lg'>Sign In</button>
    </form>
    </div>
    
  ); 
};

export default Login
