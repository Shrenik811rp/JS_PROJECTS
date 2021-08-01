
import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)


  return (
    <React.Fragment>

      {/*Creating a toggle button to show and hide */}
      <button className='btn' onClick={() => setShow(!show)}> Show/Hide
      </button>
      {/*Only show content when "show" is TRUE */}
      {show && <Text />}
    </React.Fragment>
  )
};

const Text = () => {

  //get the window width and store it in size
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {

    window.addEventListener('resize', checkSize)

    //we are cleaning up the event listener of window resize after each call of eventlisteners
    return (() => {
      window.removeEventListener('resize', checkSize)
    })
  }, [])
  return (
    <React.Fragment>
      <div>
        <h1>Window Size:{size}px </h1>
      </div>
    </React.Fragment>
  )
}
export default ShowHide;
