import React from 'react'

const SearchCard = ({el}) => {
  return (
    
    <div className="col-md-4 mt-3">
    <a href={el.posterURL }>
    <div className="card" >
        <div className="card-header"><img src={el.img} alt="" /></div>
        <div className="card-body descriptions">
            <h5>{el.title}</h5>
            <p>{el.description}</p>
            <span>{`${el.rating} /10`}</span>
        </div>
    </div>
    </a>
    </div>

)
}

export default SearchCard