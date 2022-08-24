import React from 'react';
import FullName from '../src/profile/component/FullName';
import Profession from '../src/profile/component/Profession';
import Bio from '../src/profile/component/Bio';
import HandleName from '../src/profile/component/HandleName';
import './App.css';

const App = () => {
  const followMe = x => alert(`Thank You`);
  
  return (
    <div className="container mt-5" >
    <div className="card" style={{ width: '60%', margin : "0 auto" }}>
      <FullName name="Nader Rabhi"><img src="/man.png" alt="" style={{ width: "200px"}}/></FullName>
      <Bio name="Nader Rabhi" profession="Web Developer" livePlace="Gafsa, Tunisia" />
      <Profession />
      <HandleName followMe={followMe}  name="Nader Rabhi" />
    </div>
  </div>
  )
}

export default App;
