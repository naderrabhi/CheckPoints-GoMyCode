import React from 'react';

const Bio = (props) => {
  return (
    <p> Hi, my name is <span>{props.name}</span> I'm a <span>{props.profession}</span> living in <span>{props.livePlace}</span>.
                I spend my days with my hands in many different areas of <span>{props.profession}</span> from 
                back end programming MongoDB.to front end HTML, CSS, and Javascript.
            </p>
  )
}

Bio.defaultProps = {
    name: "Nader Rabhi",
    profession : "Web Developer",
    livePlace : "Gafsa, Tunisia",
};

export default Bio;