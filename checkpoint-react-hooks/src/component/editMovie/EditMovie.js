import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditMovie = ({ editM, saveEdit }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editT, setEditT] = useState("");
  const [editD, setEditD] = useState("");
  const [editP, setEditP] = useState("");
  const [editR, setEditR] = useState("");
  const [editI, setEditI] = useState("");

  const [editedM, setEditM] = useState(editM);

  const submitEdit = (event) => {
    event.preventDefault();
    setEditM({
      id: editM.id,
      title: editT,
      description: editD,
      posterURL: editP,
      rating: editR,
      img: editI,
    });
  };

  return (
    <>
      <Button className="btn-add" variant="success" onClick={handleShow}>
        Edit movie
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form onSubmit={submitEdit}>
              <input
                onChange={(e) => setEditT(e.target.value)}
                type="text"
                placeholder={editM.title}
                className="form-control"
              />
              <input
                onChange={(e) => setEditD(e.target.value)}
                type="text"
                placeholder={editM.description}
                className="form-control"
              />
              <input
                onChange={(e) => setEditP(e.target.value)}
                type="text"
                placeholder={editM.posterURL}
                className="form-control"
              />
              <input
                onChange={(e) => setEditR(e.target.value)}
                type="number"
                placeholder={editM.rating}
                className="form-control"
              />
              <input
                onChange={(e) => setEditI(e.target.value)}
                type="text"
                placeholder={editM.img}
                className="form-control"
              />
              <button
                onClick={() => saveEdit(editedM)}
                className="btn btn-primary"
              >
                Save Edit
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditMovie;
