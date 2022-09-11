import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./movieadd.css";
import StarRatings from "react-star-ratings";
import { useNavigate } from "react-router-dom";

const MoviesAdd = ({ addMovie }) => {
  const navigate = useNavigate();

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
    img: "",
    trailer: "",
  });

  const changeRating = (newRating) => {
    setNewMovie({ ...newMovie, rating: newRating });
  };

  const handleClick = () => {
    if (
      newMovie.title !== "" &&
      newMovie.description !== "" &&
      newMovie.posterURL !== "" &&
      newMovie.rating !== 0 &&
      newMovie.img !== "" &&
      newMovie.trailer !== ""
    ) {
      addMovie(newMovie);
      setNewMovie({
        title: "",
        description: "",
        posterURL: "",
        rating: 0,
        img: "",
        trailer:''
      });
      navigate("/movies");
    } else {
      alert("enter new movie");
    }
  };
  return (
    <div className="movie--form">
      <h1>Add New Movie</h1>
      <Form.Control
        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        type="text"
        placeholder="Movie Title"
      />
      <br />
      <Form.Control
        onChange={(e) =>
          setNewMovie({ ...newMovie, description: e.target.value })
        }
        type="text"
        placeholder="Movie Description"
      />
      <br />
      <Form.Control
        onChange={(e) =>
          setNewMovie({ ...newMovie, posterURL: e.target.value })
        }
        type="text"
        placeholder="Movie URL"
      />
      <br />
      <Form.Control
        onChange={(e) => setNewMovie({ ...newMovie, img: e.target.value })}
        type="text"
        placeholder="Movie Image"
      />
      <br />
      <Form.Control
        onChange={(e) => setNewMovie({ ...newMovie, trailer: e.target.value })}
        type="text"
        placeholder="Movie Trailer Src"
      />
      <br />
      <StarRatings
        rating={newMovie.rating}
        starRatedColor="yellow"
        changeRating={changeRating}
        numberOfStars={5}
        name="rating"
        starDimension="35px"
      />
      <div>
        <button onClick={handleClick} className="btn btn-warning mt-5">
          Save
        </button>
      </div>
    </div>
  );
};

export default MoviesAdd;
