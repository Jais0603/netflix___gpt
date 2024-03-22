import React, { useEffect } from 'react'
import Header from './Header'

const Browse = () => {

  const getNowPlayingMovies  = async() =>{
    const data = await fetch
    ('https://api.themoviedb.org/3/movie/now_playing?page=1', options);

    const json =await data.json ();
    console.log(json);
  };

  useEffect (() =>{
    getNowPlayingMovies();  
  }
  )
  return (
    <div>
        
      <Header/>
    </div>
  )
}

export default Browse
