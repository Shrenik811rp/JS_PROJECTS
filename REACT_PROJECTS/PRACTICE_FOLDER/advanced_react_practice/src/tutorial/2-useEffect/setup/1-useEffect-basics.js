


import React, { useState, useEffect } from 'react';



// by default runs after every re-render
// cleanup function
// second parameter



const UseEffectBasics = () => {

  //useState -> returns a value and a function 
  //we set the value to 0 initially
  const [val, setVal] = useState(0)
  console.log(`val: ${val}`)
  console.log(`setVal function : ${setVal}`)
  console.log('outside useffect')


  //useEffect is called by default when we re render the number value on the page
  //so it rerenders 
  useEffect(() => {
    if (val > 1) {
      document.title = `Count val : ${val}`
    }
    else {
      document.title = `Message count`
    }

    console.log("inside useffect")

    //if i leave the second argument here [] as empty 
    //then it will change the value only once in the document.title

    //to make it run as long as value keeps changing we have to pass value into array

    //try with []
    //and [val] and see the difference
  }, [])

  return (
    <React.Fragment>
      <h2>useEffect Basics</h2>
      <h1>{val}</h1>

      {/*When we click the button value increases */}
      <button className='btn' onClick={() =>
        setVal(val + 1)
      }>
        Increase
      </button>
    </React.Fragment>
  )



};

export default UseEffectBasics;
