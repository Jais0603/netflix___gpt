import React, { useEffect } from 'react'
import { auth } from '../Utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addUser , removeUser} from "../Utils/userSlice";
import { LOGO } from '../Utils/constant';

const Header = () => {

  const dispatch = useDispatch();
  const navigate =useNavigate();
  const user = useSelector(store => store.user);
  
  const handleSignOut =() =>{
    signOut(auth)
    .then(() => {

      navigate("/")
    })
    .catch((error) => {
      navigate("/error");
    });
  };
  useEffect(() =>{
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName, photoURL} = user.uid;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName:displayName,
          photoURL: photoURL
        })
        );
        navigate  ("/browse")
        
      } else {
        dispatch(removeUser());
        navigate ("/");
      }
    });
    return () =>  unsubscribe();     // unsubscribe when component unmounts
  })
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44'
      src={LOGO } alt='logo'></img>

  {user && 
  <div className='flex p-2'>
    <img className='w-12 h-12'
    src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e" alt='usericon'></img>

    <button onClick={handleSignOut} className='font-bold text-white'> (Sign Out )</button>
  </div>
  }
    </div>
  );
};

export default Header;
