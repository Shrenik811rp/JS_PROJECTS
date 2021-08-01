



import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {



  const [text, setText] = useState(1)
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
  return (
    <React.Fragment>
      <h1>Short Circuit examples</h1>
      <h2>First elem is False it will return 'First elem is FALSE'</h2>
      <h3>Example: {text || 'First elem is FALSE'}</h3>
      <br />
      <h2>First elem is TRUE it will return 'hello world' </h2>
      <h3>secondVal: {secondValue}</h3>

    </React.Fragment>
  )
};

export default ShortCircuit;
