import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  //we are storing the current window dimensions
  const [size, setSize] = useState(window.innerWidth)
  console.log(size)


  //win_size will set\save the current window size according to device or responsivity
  const win_size = () => {

    //setSize will save the current size and rerender it
    setSize(window.innerWidth)
  }
  //to make the size change dynamically as we change the window width
  //instead of refreshing the page each time

  //we use useEffect to change the width text continuously and call the win_size function

  useEffect(() => {
    console.log(`calling useEffect`)
    window.addEventListener('resize', win_size)

    //adding cleanup function here
    return () => {
      console.log("cleanup effect")
      window.removeEventListener('resize', win_size)
    }
  })
  console.log('rendering')
  /*Why do we use UseEffectCleanup?
  
  - If you change the screen size a multiple times.
  - Then check eventListeners inside resize you will see a long list of eventlistener callbacks
  - This can cause problems so we use cleanup each time.
  - Now we resize the window the previous function is cleanedup by the UseEffectCleanUp and we dont have along list like before. 

  */
  
  return (
    <React.Fragment>
      <h2>useEffect cleanup</h2>
      <h1>Window width:{size}px</h1>
    </React.Fragment>
  )
};

export default UseEffectCleanup;
