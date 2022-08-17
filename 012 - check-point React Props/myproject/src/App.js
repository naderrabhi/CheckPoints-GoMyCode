import React, { Component } from 'react';
import FullName from '../src/profile/component/FullName';
import ImageBio from '../src/profile/component/ImageBio';
import Profession from '../src/profile/component/Profession';
import Bio from '../src/profile/component/Bio';
import HandleName from '../src/profile/component/HandleName';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="container mt-5" >
        <div className="card" style={{ width: '60%', margin : "0 auto" }}>
          <FullName />
          <ImageBio src="/man.png" alt="image-profile"/>
          <Bio name="Nader Rabhi" profession="Web Developer" livePlace="Gafsa, Tunisia" />
          <Profession />
          <HandleName name="Nader" />
        </div>
    </div>
)}}

export default App;
