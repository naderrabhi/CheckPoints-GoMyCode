import React, { useState } from 'react';

import Header from './component/header/Header';
import MovieLists from './MovieLists';
import MovieCard from './component/movieCard/MovieCard';
import MovieAdd from './component/movieAdd/MovieAdd';
import Search from './component/movieFilter/Search';
import SearchByRating from './component/SearchRating/SearchByRating'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [newMovieLists,setMovieLists] = useState(MovieLists)
  const [searchArr,setSearchArr] = useState("")
  const [searchRate,setSearchRate] = useState("")

  
const addMovie = (movie) => {
  if (movie.title && movie.description && movie.posterURL && movie.rating && movie.img){
  setMovieLists ([...newMovieLists, movie])
  }
}
const handleSearchRate = x => {
  setSearchRate ( newMovieLists.filter(movie => movie.rating >= x ).map((el,i) =>
    <div className="col-md-4 mt-3" key={i}>
        <a href={el.posterURL }>
        <div className="card" >
            <div className="card-header"><img src={el.img} alt="" /></div>
            <div className="card-body descriptions">
                <h5>{el.title}</h5>
                <p>{el.description}</p>
                <span>{`${el.rating} /10`}</span>
            </div>
        </div>
        </a>
  </div>) )
  }
const callSearchFunction = x => {
  setSearchArr ( newMovieLists.filter(movie => movie.title.toLowerCase() === x.toLowerCase() ).map((el,i) =>
    <div className="col-md-4 mt-3" key={i}>
        <a href={el.posterURL }>
        <div className="card" >
            <div className="card-header"><img src={el.img} alt="" /></div>
            <div className="card-body descriptions">
                <h5>{el.title}</h5>
                <p>{el.description}</p>
                <span>{`${el.rating} /10`}</span>
            </div>
        </div>
        </a>
  </div>) )
  }

  return (
    <div>
      <Header>
        <MovieAdd addMovie={addMovie} />
        <Search callSearchFunction={callSearchFunction} />
        <SearchByRating handleSearchRate={handleSearchRate} />
      </Header>
      <div className="container mt-5">
      <div className="row mt-3 mr-5">
        {searchArr}
        <hr />
        {searchRate}
        <hr />
      </div>
        <div className="row">
        
          <MovieCard MovieLists={newMovieLists} />
          
        </div>
    </div>
    </div>
  );
}

export default App;
