import React from 'react';
import Rate from './Rate'
const MovieCard = (props) => {
    return (
      <div className="Movie-Card">
  <div className="rating-movie">
  <img className="movie-image" src={props.MovieContainer.image} alt="" />
        <div className="rating-Card"> <Rate rate={props.MovieContainer.rating} onChange={()=>{}}/></div> 
        <div className="info-movie">
        <div className="title">
       <h3>{props.MovieContainer.title}</h3>
        </div>
        <div className="description">
        <h3>{props.MovieContainer.description}</h3>
      </div>  
       </div>
      </div>
    </div>
    )
  };

export default MovieCard 
