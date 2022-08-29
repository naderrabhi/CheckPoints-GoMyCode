import React from 'react';
import FullName from './profile/component/FullName';
import Profession from './profile/component/Profession';
import Bio from './profile/component/Bio';
import HandleName from './profile/component/HandleName';
import './App.css';

const App = () => {
  const followMe = _ => alert(`Thank You`);
  
  return (
    <div className="container mt-5" >
    <div className="card" style={{ width: '60%', margin : "0 auto" }}>
      <FullName name="Nader Rabhi"><img src="/man.png" alt="" style={{ width: "200px"}}/><hr/></FullName>
      <Bio name="Nader Rabhi" profession="Web Developer" livePlace="Gafsa, Tunisia" />
      <Profession />
      <HandleName followMe={followMe}  name="Nader Rabhi" />
    </div>
  </div>
  )
}

export default App;
