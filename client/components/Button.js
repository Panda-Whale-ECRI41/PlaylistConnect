//import react
import React from 'react';

//declare button component that fires a fxn when clicked

const Button = (props) => {
  return (
    <button className='AddButton' onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export { Button };
