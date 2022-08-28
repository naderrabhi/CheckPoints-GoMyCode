import React,{ useState} from 'react'
// import { FaStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
const SearchByRating = ({handleSearchRate}) => {

    const [rate, setRate] = useState("");
  return (
    <div style={{display: 'flex', marginLeft: '4%'}}>
        <ReactStars
    count={10}
    onChange={(newRating) => setRate(newRating)}
    size={34}
    activeColor="#ffd700"
  />,
  <button 
        style={{width:'20%'}}
        onClick={() => handleSearchRate(rate)} 
        type="submit" 
        className="btn btn-primary">
            Submit Rating
    </button>
 
    </div>
  )
}

export default SearchByRating