import React from 'react';
import { movies } from '../data';

console.log(movies)
const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>


        
        
        {movies.map(movie => 
        <div>
          {movie.title} / {movie.time}
          {movie.genres.map(genre => <ul>{genre}</ul>)}
          </div>
        )}


    </div>
  );
};

export default Movies;
