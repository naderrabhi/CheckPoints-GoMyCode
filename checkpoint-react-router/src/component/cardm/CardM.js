import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cardm.css";

import { Button, Modal } from "react-bootstrap";

const CardM = ({ movie }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  return (
    <div className="card--movie--description">
      <div className="row">
        <div className="col-3">
          <img src={movie.img} alt="" />
        </div>
        <div className="col-9">
          <div className="movie--title">
            <h1>{movie.title}</h1>
            <span>
              <StarRatings
                rating={movie.rating}
                starRatedColor="yellow"
                // changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
                starDimension="35px"
              />
            </span>
          </div>
          <div className="movie--text">
            <p>{movie.description}</p>
          </div>
          <div>
            <a href={movie.posterURL}>{`www.imdb.com/${movie.title}`}</a>
          </div>
          <div className="btn--trailer">
            <Button variant="warning" onClick={handleShow}>
              Watch Trailer
            </Button>

            <Modal show={show} onHide={handleClose}>
              <iframe
                title="trailer"
                height="500"
                src={`${movie.trailer}?autoplay=1&mute=1`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </Modal>
          </div>
        </div>
      </div>
      <div className="btn--back">
        <button className="btn btn-warning" onClick={() => navigate("/movies")}>
          {'< Back'}
        </button>
      </div>
    </div>
  );
};

export default CardM;
