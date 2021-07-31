

import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';


const MultipleReturns = () => {

  // - set isLoading boolean variable to true
  const [isLoading, setLoading] = useState(true)

  // - set isError boolean variable to false
  const [isError, setError] = useState(false)

  const [username, setUser] = useState("New User")



  useEffect(() => {

    /*Here we want to fetch the user using the url
    
    - We are not using async await for fetch in this case

    - We convert the response we get into json format

    - Since fetch returns a Promise we use "then" and print out our user

    - If we get an error we catch it 
    */
    fetch(url)

      /*What if the link to user is wrong then to display error status in response we modify response*/
      .then((response) => {

        //if url for user is correct and status of response within range
        if (response.status >= 200 && response.status <= 299) {
          return response.json()
        }

        //Since we didnt get the right data and got an error

        // we setLoading function to false
        else {
          setLoading(false)
          setError(true)
          throw Error(response.statusText)
        }

      })
      .then((username) => {
        console.log(username)

        //get all the attributes from user object
        const { login } = username

        //we display the user
        setUser(login)

        //if setLoading is false then we display the name of user and not "New User"

        setLoading(false)

      })
      .catch((error) => console.log(`You got error`))

    /*We are using the empty dependency array so that UseEffect runs only once 
    
    - And not each time useEffect is called
    */
  }, [])


  // ifLoading -> is true
  if (isLoading) {
    return (
      <h2>Loading user...</h2>
    )
  }
  // ifError -> is true
  if (isError) {
    return (
      <h2>Error user...</h2>
    )
  }
  return (
    <React.Fragment>
      <h2>{username}</h2>
    </React.Fragment>
  )
};

export default MultipleReturns;
