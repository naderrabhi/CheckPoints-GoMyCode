import React from "react";
import MovieCard from "../movieCard/MovieCard";

function MovieList({ list, delMovie, editMovie, children }) {
  return list.map((movie) => (
    <MovieCard
      movie={movie}
      delMovie={delMovie}
      editMovie={editMovie}
      children={children}
    />
  ));
}

export default MovieList;
