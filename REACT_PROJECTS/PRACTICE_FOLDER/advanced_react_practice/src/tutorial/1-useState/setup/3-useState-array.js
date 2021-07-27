import React, { useState } from 'react';
import { name_list } from '../../../data';

const UseStateArray = () => {
  const [people, set_people] = useState(name_list)

  //function to remove a particular person based on id

  const remove_person = (id) => {
    // return all the people whos ids dont match

    //filter() -> returns a new array with people whos id dont match 

    // so we delete the person whos id matches

    //delete the person whos id matches the user selecting (or) clicking id 
    let other_people = people.filter((person) => person.id !== id)

    //create a new array of people who were not filtered out
    set_people(other_people)
  }

  return (
    <React.Fragment>
      <h2>useState array example</h2>

      {/*displaying object data in a clean manner using map from data.js */}
      {people.map((person) => {
        console.log(person)
        const { id, name } = person

        {/*Must always contain "key" with unique value else React throws error */ }
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => {
              remove_person(id)
            }}>remove</button>
          </div>
        )
      })}



      {/*To delete all the names. Set its value to an empty string
      
      
      But without adding '()=>' the function will run immediately without calling click function so for it work add  '()=>'
      */}
      <button className='btn' onClick={() => set_people([])}>Clear names
      </button>

    </React.Fragment>
  )


};

export default UseStateArray;
