import React, { Component } from "react";

class Time extends Component {
  constructor (){
    super();
    this.state = {
      date: new Date()
    };
  }
  timer() {
    this.setState({
      date: new Date()
    });
  }
  componentDidMount() {
    setInterval(() => this.timer(),1000);
  }
  render() {
    return <div className="time">{this.state.date.toLocaleTimeString()}</div>;
  }
}

export default Time;
