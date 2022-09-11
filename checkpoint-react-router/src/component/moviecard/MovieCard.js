import React from "react";
import { Link } from "react-router-dom";
import "./moviecard.css";
import StarRatings from "react-star-ratings";

const MovieCard = ({ movie,index, setIndexmovie }) => {
  return (
    <div className="movie--card">
    <Link to={`/movies/${movie.id}`} onClick={() => setIndexmovie(index)}>
        <div className="card--img">
          <img src={movie.img} alt="" />
          <div className="star--ratings">
          <StarRatings
          
          rating={movie.rating}
          starRatedColor="yellow"
          // changeRating={this.changeRating}
          numberOfStars={5}
          name="rating"
          starDimension="29px"
        />
          </div>
        </div>
        
    </Link>
    </div>
    
  );
};

export default MovieCard;
