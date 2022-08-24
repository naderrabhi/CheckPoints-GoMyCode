import React, { useRef, useState } from 'react';
import MovieCard from './component/moviecard/MovieCard';
import Filter from './component/filter/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {



  return (
    <div className="container mt-5">
      <div className="row">
        <MovieCard />
        <Filter />
      </div>
    </div>
  );
}

export default App;
