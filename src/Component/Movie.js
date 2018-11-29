import React from 'react';
import MovieCard from './MovieCard'
const Movie = (props) => {
  return <div className="Movie-Main">
   {props.movieList.map((elm,i)=>
   <MovieCard key={i} MovieContainer={elm}/>
   )} 
   </div>
   
}

export default Movie 
