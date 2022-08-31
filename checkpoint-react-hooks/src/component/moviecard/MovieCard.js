import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./moviecard.css";

const MovieCard = ({ movie, delMovie, editMovie, children }) => {
  return (
    <div
      key={movie.id}
      className="col-md-4 text-center mb-5 text-muted text-light"
    >
      <Card className="card-movie" style={{}}>
        <Card.Img
          variant="top"
          src={movie.img}
          alt=""
          style={{ width: "18rem", height: "18rem" }}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>{movie.posteURL}</Card.Text>
          <Card.Text>{movie.rating}</Card.Text>
          <Button variant="primary" onClick={() => editMovie(movie)}>
            Edit
          </Button>
          <Button
            className="btn-del"
            variant="danger"
            onClick={() => delMovie(movie.id)}
          >
            Del
          </Button>
          {children}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
