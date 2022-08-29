import React from 'react';
import Profile from './profile/Profile'
import './App.css';
const App = () => {
  const user = {name:"nader rabhi",bio:"Gafsa, Tunisia",profession:"Web Developer"}
  const followMe = x => alert(`Thank You ${x}`);
  return <Profile followMe={followMe} user={user}><img src="/man.png" alt="" style={{ width: "200px"}}/></Profile>
}
export default App;
