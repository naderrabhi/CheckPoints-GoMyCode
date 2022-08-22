import React from 'react';

const Items = (props) => {
  return (
    <li>{props.item}</li>
  )
}

Items.defaultProps = {
    item : "Web Developer",
};

export default Items;