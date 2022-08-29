import React from 'react'
import PropTypes from "prop-types";

const Profile = ({user,children,followMe}) => {
  return (
    <div className="container mt-5" >
    <div className="card" style={{ width: '60%', margin : "0 auto" }}>
    <h1>Hello My Name Is <span>{user.name}</span></h1><hr />
    {children}
    <p>{user.bio}</p>
    <ul>
        <li>{user.profession}</li>
    </ul>
    <button className="btn btn-primary" onClick={()=> followMe(user.name)}>follow Me!</button></div></div>  
  )}
  
Profile.defaultProps = {
    name: "Stranger",
    children: "/man.png",
    profession:"web developer",
    bio:"Gafsa",
};
Profile.propTypes ={
  followMe:PropTypes.func
}
export default Profile