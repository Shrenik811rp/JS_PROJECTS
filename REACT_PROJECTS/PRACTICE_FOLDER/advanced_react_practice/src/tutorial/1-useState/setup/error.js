import React from 'react';

const Error = () => {
  let title = 'some title'

  const click_func = () => {
    title = "new title"
    console.log(title)
  }
  //React.fragment is just a fster alternative to putting div tag
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={click_func}>
        Change?
      </button>
    </React.Fragment>
  );
};

export default Error;
