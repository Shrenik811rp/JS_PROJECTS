
/*Here "useState" -> is a function and is not built in function from react */
import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState)
  // console.log(`useState():${useState("Hello javas")}`)

  // const val = useState(1)[0]
  // const func = useState(1)[1]
  // console.log(`Value: ${val}, function: ${func}`)
  // console.log(`useState with params: ${useState("some_val", function () {
  //   console.log("Function call")
  // })}`)


  //useState -> function from react which returns one value and a function
  const [text, change_text] = useState("some title")

  const click_func = () => {
    if (text === 'some title') {
      change_text('Changed text')
    }
    else {
      change_text('some title')
    }

  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      {/*Call click_func() to change text on click */}
      <button className='btn' onClick={click_func}>
        Change title?
      </button>
    </React.Fragment>
  )

};

export default UseStateBasics;
