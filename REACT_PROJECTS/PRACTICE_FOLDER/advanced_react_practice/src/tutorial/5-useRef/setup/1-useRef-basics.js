


import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements




const UseRefBasics = () => {

  const ip_ref_example = useRef(null)

  const div_ref_example = useRef(null)

  const submit_func = (event) => {
    event.preventDefault()
    /*We print out the current value entered in the input space 
    
    - So when we hit submit the current inputted value will be printed out
    */
    console.log(`Message typed in input: ${ip_ref_example.current.value}`)

    console.log(`type div: ${div_ref_example.current}`)

  }


  useEffect(() => {

    //prints out whatever we type in input
    console.log(`Type  : ${ip_ref_example.current}`)

    //here we add a highlight to the border of the input space
    ip_ref_example.current.focus()

    /*In the case of useRef ->

    We dont need to create an empty dependency array '[]' like for useState

    useEffect(()=>{

    },[])


    - Because UseRef doesnt trigger re-render unlike useState
    */
  })


  console.log(`ref example: ${ip_ref_example}`)
  return (
    <React.Fragment>
      <h2>UseRef Demo example</h2>
      <form className='form' onSubmit={submit_func}>
        <div>
          <input type="text" ref={ip_ref_example} />
          <button type='submit'>
            Submit
          </button>
        </div>
        <div ref={div_ref_example}>demo of UseRef</div>
      </form>
    </React.Fragment>
  )
};

export default UseRefBasics;
