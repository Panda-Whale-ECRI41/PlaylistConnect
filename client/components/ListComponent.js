import React from 'react';
//modular component what gets added to sceen whenever button is clicked
const ListComponent = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};

export { ListComponent };
