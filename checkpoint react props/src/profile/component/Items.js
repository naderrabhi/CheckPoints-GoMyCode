import React from 'react';

const Items = ({item}) => {
  return (
    <li>{item}</li>
  )
}

Items.defaultProps = {
    item : "Web Developer",
};

export default Items;