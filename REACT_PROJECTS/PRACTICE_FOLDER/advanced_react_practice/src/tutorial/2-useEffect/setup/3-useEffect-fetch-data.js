import React, { useState, useEffect } from 'react';

//url contains details of all github users we want to display
const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  //useState returns val and setVal
  const [users, SetVal] = useState([])

  //get the result from the api and turn it into json so that we can work with it
  const getUsers = async () => {
    const response = await fetch(url)

    const userList = await response.json()


    /*What will happen if we run SetVal(userList)?
    
    - If we uncomment SetVal it will rerender the page and call useEffect

    - useEffect will inturn call getUsers and return new updated response 

    - And this will go on and on -> so we get an infinite loop

    DO IT TO BELIEVE IT
    


    So whats the solution?

    - We can put an empty array like in useEffect before 

    - So that we call useEffect only once and it stops calling getUsers function.
    */


    SetVal(userList)
    console.log(userList)
  }
  //cannot make useEffect as async await because it cannot return Promise
  useEffect(() => {
    getUsers()

    //we add an empty array [] so that we call useEffect only once.
  }, [])
  return (
    <React.Fragment>
      <h2>Github User List</h2>
      <ul className="users">
        {users.map((user) => {

          const { url, avatar_url, login, html_url, id } = user

          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />

              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a><br />
              </div>
            </li>
          )
        })}
      </ul>

    </React.Fragment>
  )


};

export default UseEffectFetchData;
