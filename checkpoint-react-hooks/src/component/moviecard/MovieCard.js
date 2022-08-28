import React from 'react';
import Card from '../Card/Card';
import './moviecard.css'

function MovieCard({MovieLists}){
    
    return (MovieLists.map( (el,index) => <Card el={el} key={index} />
         
    ))
}

export default MovieCard;