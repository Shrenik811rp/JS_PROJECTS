

import React, { useState } from 'react';


// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [first_name, setFirst] = useState('')
  const [email, setEmail] = useState('')

  //set people as an empty array which will hold all the users or people
  const [people, setPeople] = useState([])


  const submit_func = (event) => {
    event.preventDefault()

    //only is user has entered both firstname and email run the condition
    if (first_name && email) {
      //add the new person to people array
      //Adding a unique id to each person which is current time
      const person = { first_name, email, id: new Date().getTime().toString() }

      //set every persons value in people array
      setPeople((people) => {
        return [...people, person]
      })
      //after getting values set them to empty string again -> basically refreshing the form input
      setFirst('')
      setEmail('')


      console.log(person)
      console.log(people)
      console.log(`Name: ${first_name} \nEmail:${email}`)
    }
    else {
      console.log('Empty values')
    }

  }

  return (
    <React.Fragment>
      <h1>controlled inputs</h1>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor="firstName">Name : </label>
            {/* Value gets the value of the firstName and email.
            
            - onChange helps us to get the value from the input fields 
            */}
            <input
              type='text' id='firstName' name='firstName'

              value={first_name}
              onChange={(event) => setFirst(event.target.value)}
            ></input>
          </div>

          <div className='form-control'>
            <label htmlFor="email">Email : </label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input >
          </div>

          <button type='submit' onClick={submit_func}> Add Person</button>
        </form>

        {/*Adding a list below the form
        - Displaying each person of the people array
        - Destructuring the person object which contains " email,id and first_name "

        - Unique key value must be passed for each element of array otherwise react will throw error

        - Id value is the current time converted into string format
        */}
        {
          people.map((person) => {
            const { first_name, email, id } = person;
            return (
              <div className='item' key={id}>
                <h4>Name: {first_name}</h4>
                <p>Email Id: {email}</p>
              </div>
            )
          })
        }
      </article>
    </React.Fragment>
  )
};

export default ControlledInputs;
