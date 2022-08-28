import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './../../App.css'

function MovieAdd({addMovie}) {
    const [show, setShow] = useState(false);
    const [movie, setMovie] = useState({
        title: '',
        description: '',
        posterURL : '',
        rating : '',
        img : '',
    });
    

    const handleSubmit = event => event.preventDefault();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>Add movie</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>Adding movie</Modal.Title></Modal.Header>
        <Modal.Body>
        <div>
    <form className="form-control" onSubmit={handleSubmit}>
        <label htmlFor="title" className="mb-2">Title</label>
        <input  id='title' value={movie.title} onChange={e=>setMovie({...movie ,title : e.target.value})} className='form-control' type="text"/>
        <label htmlFor="description" className="mb-2">Description</label>
        <input  id='description' value={movie.description} onChange={e=>setMovie({...movie ,description : e.target.value})} className='form-control' type="text"/>
        <label htmlFor="posterURL" className="mb-2">PosterURL</label>
        <input  id='posterURL' value={movie.posterURL} onChange={e=>setMovie({...movie ,posterURL : e.target.value})} className='form-control' type="text"/>
        <label htmlFor="rating" className="mb-2">Rating</label>
        <input v id='rating' value={movie.rating} onChange={e=>setMovie({...movie ,rating : e.target.value})} className='form-control' type="text"/>
        <label htmlFor="img" className="mb-2">Image</label>
        <input id='img' value={movie.img} onChange={e=>setMovie({...movie ,img : e.target.value})} className='form-control' type="text"/>
    </form>
    <div className="text-center">
        <button className='btn btn-primary btn-lg ' onClick={addMovie.bind(this,movie)}>Add</button>
    </div>
    </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MovieAdd;