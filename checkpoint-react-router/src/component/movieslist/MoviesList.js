import React from 'react';
import MovieCard from '../moviecard/MovieCard';
import './movieslist.css'


const MoviesList = ({movieList,setIndexmovie}) => {
  return (
    <div className='movies--list'>
        {movieList.map((movie,i) => <MovieCard index={i} key={movie.id} movie={movie} setIndexmovie={setIndexmovie} />)}
    </div>
  )
}

export default MoviesList