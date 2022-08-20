import React, { Component } from 'react';

class Bio extends Component {
    render() {
        return (
            <p> Hi, my name is <span>{this.props.name}</span> I'm a <span>{this.props.profession}</span> living in <span>{this.props.livePlace}</span>.
                I spend my days with my hands in many different areas of <span>{this.props.profession}</span> from 
                back end programming MongoDB.to front end HTML, CSS, and Javascript.
            </p>
)}}

Bio.defaultProps = {
    name: "Nader Rabhi",
    profession : "Web Developer",
    livePlace : "Gafsa, Tunisia",
};

export default Bio;