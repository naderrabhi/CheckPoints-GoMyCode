import React from 'react';

const FullName = (props) => {
  return (
    <>
    <h1>Hello My Name Is <span>{props.name}</span></h1>
    <div>{props.children}</div>
    </>
  )
}

FullName.defaultProps = {
    name: "Stranger",
    children: "/man.png",
};

export default FullName;