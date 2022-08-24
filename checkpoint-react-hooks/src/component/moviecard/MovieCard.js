import React from 'react';
import animelists from '../animelists/Animelist';
import './moviecard.css'

function MovieCard(){
    
    return (animelists.map((animelist,index) =>
        <div className="col-md-4 mt-3" key={index}>
        <a href={animelist.posterURL}>
        <div className="card" >
            <div className="card-header"><img src={animelist.img} alt="" /></div>
            <div className="card-body descriptions">
                <h5>{animelist.title}</h5>
                <p>{animelist.description}</p>
                
            </div>
        </div>
        </a>
        </div> 
    ))
}

export default MovieCard;