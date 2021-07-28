import React, { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: "Sam",
    age: 23,
    message: "random message"
  })

  const click_func = () => {
    //change only the message on click

    //use "spread operator" on the person object and access only the message attribute
    setPerson({ ...person, name: "New message" })

    /*If you do this:

    setPerson({ message: "New message" })

    It will replace the entire object with this, so it will replace it
     */
  }
  return (
    <React.Fragment>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>

      <button className="btn" onClick={click_func}>Change message</button>
    </React.Fragment>
  )

};

export default UseStateObject;
