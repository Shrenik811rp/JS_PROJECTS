import React, { useState } from 'react';

const UseStateCounter = () => {

  //useState will hold an initial value of 0 for counter example
  const [val, setVal] = useState(0)

  const reset_func = () => {
    setVal(0)
  }
  const incr_func = () => {
    setVal(val + 1)
  }
  const decr_func = () => {
    setVal(val - 1)
  }

  const complx_func = () => {
    setTimeout(() => {

      /*This line of code will also increase the counter value but the rest of the clicks will not increase its value */
      //setVal(val + 1)

      /*THis will increase the value how many ever times we want to increase a value with a delay */
      setVal((prev_val) => {
        return prev_val + 1
      })
    }, 1000)
  }
  return (
    <React.Fragment>
      <section>
        <h2>Counter</h2>
        <h2>{val}</h2>
        <button className="btn" onClick={decr_func}>Decrease</button>
        <button className="btn" onClick={reset_func}>Reset</button>
        <button className="btn" onClick={incr_func}>Increase</button>
      </section>

      <section>
        <h2>Complex Counter</h2>
        <h2>{val}</h2>
        <button className="btn" onClick={complx_func}>Increase</button>
      </section>

    </React.Fragment>
  )
};

export default UseStateCounter;
