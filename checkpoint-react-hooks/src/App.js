import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListMovies from "./ListMovies";
import MovieList from "./component/movieList/MovieList";
import Filter from "./component/filter/Filter";
import AddMovie from "./component/addingMovie/AddMovie";
import EditMovie from "./component/editMovie/EditMovie";

const App = () => {
  const [newListMovies, setList] = useState(ListMovies);
  const [listFiltred, setListFiltred] = useState(newListMovies);
  const [editM, setEditM] = useState("");

  function adding(movie) {
    setListFiltred([...listFiltred, movie]);
  }

  function filter(tVal, rate) {
    setListFiltred(
      newListMovies.filter((movie) => {
        return (
          movie.title.toLowerCase().includes(tVal.toLowerCase()) &&
          movie.rating >= rate
        );
      })
    );
  }
  const delMovie = (x) => {
    setListFiltred(listFiltred.filter((el) => el.id !== x));
  };
  const editMovie = (x) => setEditM(x);

  const saveEdit = (x) => {
    setListFiltred(listFiltred.map((el) => (el.id === x.id ? x : el)));
    console.log(x);
  };
  return (
    <div>
      <div className="container">
        <Filter filter={filter} />
        <AddMovie adding={adding} />
        <EditMovie editM={editM} saveEdit={saveEdit} />
        <div className="row mt-5">
          <MovieList
            list={listFiltred}
            delMovie={delMovie}
            editMovie={editMovie}
          ></MovieList>
        </div>
      </div>
    </div>
  );
};

export default App;
