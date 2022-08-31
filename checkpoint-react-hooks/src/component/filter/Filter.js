import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import "./filter.css";
const Filter = ({ filter }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [rate, setRate] = useState(0);

  const handleSearch = (newRate) => {
    filter(searchTitle, newRate);
    setRate(newRate);
  };
  function submitted(ev) {
    ev.preventDefault();
    filter(searchTitle, rate);
  }
  return (
    <form onChange={submitted} className="search">
      <input
        type="text"
        onChange={(e) => setSearchTitle(e.target.value)}
        className="form-control"
        placeholder="Search for..."
      />
      <ReactStars
        count={10}
        onChange={handleSearch}
        size={50}
        isHalf={true}
        activeColor="#ffd700"
        classNames="star"
      />
    </form>
  );
};

export default Filter;
