import React, { Component } from 'react';
import Time from './Time';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Card} from 'react-bootstrap';
import nader from './nader.png'

class App extends Component {
  constructor () {
    super ();
    this.state = {
      Person : {
        fullName: "nader rabhi",
        bio : "Full-Stack", 
        imgSrc : nader, 
        profession:"web developer"},
        show : true,
        showHidden : "hidden",
    };
  }

  Show = () => {
    if (this.state.show) {
      document.querySelector(".profile").style = "display : none";
      this.setState({show: false,showHidden:"show"});
    }else {
      document.querySelector(".profile").style = "display : block";
      this.setState({show: true,showHidden:"hidden"});
    }
  }

  render() {
    return (
      <div className="container mt-5 text-center">
        <Time />
        <Button className='mt-2' onClick={this.Show} variant="primary">{this.state.showHidden}</Button>
        <div className='profile' style={{display : "block"}}>
          <Card className="cardProfile mt-3" >
            <Card.Img variant="top" src={this.state.Person.imgSrc} />
            <Card.Body>
              <Card.Title><h1>{this.state.Person.fullName}</h1></Card.Title>
              <Card.Text>
                {this.state.Person.bio}<br/>
                {this.state.Person.profession}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      
    )
  }
}


export default App;
