import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../Utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/movieSlice';

const Browse = () => {

  return (
    <div>
        
      <Header/>
    </div>
  )
}  

export default Browse
