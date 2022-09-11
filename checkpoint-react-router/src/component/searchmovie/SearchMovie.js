import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import StarRatings from "react-star-ratings";
import './searchmovie.css'

const SearchMovie = ({ filterByTitle, filterByRating }) => {
  const [rating, setRating] = useState(0);
  const changeRating = (newRating, name) => {
    setRating(newRating);
    filterByRating(newRating);
    setRating(0);
  };
  return (
    <div className="movie--filter">
      <Form.Control
        onChange={(e) => filterByTitle(e.target.value)}
        type="text"
        placeholder="Search for..."
      />
      <StarRatings
        rating={rating}
        starRatedColor="yellow"
        changeRating={changeRating}
        numberOfStars={5}
        name="rating"
        starDimension="24px"
        starHoverColor="yellow"
      />
    </div>
  )
}

export default SearchMovie