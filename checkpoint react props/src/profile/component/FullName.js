import React from 'react';

const FullName = (props) => {
  return (
    <h1>Hello My Name Is <span>{props.name}</span></h1>
  )
}

FullName.defaultProps = {
    name: "Stranger"
};

export default FullName;