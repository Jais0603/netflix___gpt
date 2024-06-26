import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../Utils/Validate';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../Utils/firebase";
import { BG_Logo } from '../Utils/constant';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage ] =useState(null);

  const Username =useRef(null);
  const email =useRef(null);
  const password =useRef(null);

    const handleButtonClick =()=>{
      // validate the form data
      const message = checkValidData(email.current.value, password.current.value);
      setErrorMessage(message);
      if(message) return;

      if(!isSignInForm){
        //sign up logic
        createUserWithEmailAndPassword(
        auth,
        email.current.value, 
        password.current.value
        )
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
      displayName: Username.current.value ,
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    })
    .then(() => {
    }).catch((error) => {
        setErrorMessage(error.message);
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
  
}
else{
  // sign in logic
  signInWithEmailAndPassword(
    auth,
    email.current.value, 
    password.current.value
    )
    .then((userCredential) => {
      const user = userCredential.user;
  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
    });

      }
      
      };


    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div>
    <Header/>
    <div className='absolute' >
    <img src={BG_Logo}alt='bg-logo'/>
    </div>
    <form onSubmit={(e) => e.preventDefault()} className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
        <h1 className='font-bold text-3xl py-4'>
        {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

       { !isSignInForm && 
       <input ref ={Username}type="text" placeholder='Username'
        className='p-4 my-4 w-full bg-gray-700 '></input>}

        <input ref ={email}type="text" placeholder='Email or Phone number'
        className='p-4 my-4 w-full bg-gray-700 '></input>

        <input ref={password} type="password" placeholder='Password'
        className='p-4 my-4 w-full bg-gray-700 '></input>

        <p className="text-red py-2 ">{errorMessage}</p>

        <button className='p-4 my-7 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign up Now" : "Already a user? Sign In "}</p>
    </form>
    </div>
    
  ); 
};

export default Login
