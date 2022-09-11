import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='movies--home' style={{backgroundImage: `url("./image/bg.png") `,backgroundRepeat: 'no-repeat', backgroundPosition: 'right center'}}> 
        <h1>movieApp</h1>
        <h2>Unlimited <span>Movie</span>, <br/>  TVs Shows, & More.</h2>
        <button onClick={()=>navigate('/movies')} className='btn'>WATCH NOW</button>
    </div>
  )
}

export default Home