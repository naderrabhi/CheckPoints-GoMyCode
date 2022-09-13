import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./component/header/Header";
import MoviesAdd from "./component/moviesadd/MoviesAdd";
import SearchMovie from "./component/searchmovie/SearchMovie";
import Home from "./component/home/Home";
import MoviesList from "./component/movieslist/MoviesList";
import CardM from "./component/cardm/CardM";
import data from "./Data";

const App = () => {
  const navigate = useNavigate()
  const [movieList, setMoviesList] = useState(data);
  const [rate, setRate] = useState(0);
  const [title, setTitle] = useState("");
  const [indexMovie, setIndexmovie] = useState(0);

  const addMovie = (movie) => {
    setMoviesList([...movieList,{ ...movie, id: movieList.length }]);
  };

  const filterByTitle = (serchedtitle) => {
    navigate('/movies')
    setTitle(serchedtitle);
  };

  const filterByRating = (serchedrating) => {
    navigate('/movies')
    setRate(serchedrating);
  };

  return (
    <div className="app">
      <Header title="movieApp">
        <SearchMovie
          filterByTitle={filterByTitle}
          filterByRating={filterByRating}
        />
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={
            <MoviesList
              setIndexmovie={setIndexmovie}
              movieList={movieList.filter(
                (movie) =>
                  movie.title
                    .toLowerCase()
                    .includes(title.trim().toLocaleLowerCase()) &&
                  movie.rating >= rate
              )}
            />
          }
        />
        <Route
          path="/movies/:idmovie"
          element={<CardM movie={data[indexMovie]} />}
        />
        <Route path="/newmovies" element={<MoviesAdd addMovie={addMovie} />} />
      </Routes>
    </div>
  );
};

export default App;
