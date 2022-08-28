import React from 'react';

const FullName = ({name,children}) => {
  return (
    <>
    <h1>Hello My Name Is <span>{name}</span></h1>
    <h1>{children}</h1>
    </>
  )
}

FullName.defaultProps = {
    name: "Stranger",
    children: "/man.png",
};

export default FullName;