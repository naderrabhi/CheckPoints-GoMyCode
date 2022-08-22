import React from 'react';

const ImageBio = (props) => {
  return (
    <img src={props.src} alt={props.alt} style={{ width: "200px"}}/>
  )
}


ImageBio.defaultProps = {
    src: "/man.png",
    alt : "image-profile",
};

export default ImageBio;