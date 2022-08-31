import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./addmovie.css";

const AddMovie = ({ adding }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
    img: "",
  });

  return (
    <>
      <Button className="btn-add" variant="success" onClick={handleShow}>
        add movie
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                onChange={(e) => setMovie({ ...movie, title: e.target.value })}
                type="text"
                placeholder="movie name"
                className="form-control"
              />
              <input
                onChange={(e) =>
                  setMovie({ ...movie, description: e.target.value })
                }
                type="text"
                placeholder="movie description"
                className="form-control"
              />
              <input
                onChange={(e) =>
                  setMovie({ ...movie, posterURL: e.target.value })
                }
                type="text"
                placeholder="movie URL"
                className="form-control"
              />
              <input
                onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
                type="text"
                placeholder="movie rating"
                className="form-control"
              />
              <input
                onChange={(e) => setMovie({ ...movie, img: e.target.value })}
                type="text"
                placeholder="movie image"
                className="form-control"
              />
              <Button onClick={() => adding(movie)} variant="success">
                add new movie
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddMovie;
