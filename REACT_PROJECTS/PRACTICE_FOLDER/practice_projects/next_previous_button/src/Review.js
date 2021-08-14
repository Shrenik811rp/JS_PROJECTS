


import React, { useState } from 'react';

import people from './data';


import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review = () => {

  //set index to 0 to display the first person
  const [index,setIndex] = useState(0)

  const {name,job,image,text} = people[index]


  const checkSize = (size)=>{
    if(size > people.length - 1){
      return 0
    }
    if (size < 0){
      return people.length - 1
    }

    return size
  }
  const nextPerson = ()=>{
    setIndex((index)=>{
      let tempIndex = index + 1
      return checkSize(tempIndex)
    })
  }

  const prevPerson = ()=>{
    setIndex((index)=>{
      let tempIndex = index - 1
      return checkSize(tempIndex)
    })
  }

  const randomPerson = ()=>{
    let tempIndex = (Math.floor(Math.random()*people.length))

    if(tempIndex === index){
      tempIndex = index + 1
    }
    setIndex(checkSize(tempIndex))
  }
  //console.log(people)
  return (
    <React.Fragment>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className='person-img'></img>
          <span className='quote-icon'>
            <FaQuoteRight/>
          </span>
        </div>

        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="button-container">

          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft></FaChevronLeft>
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight></FaChevronRight>
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
            Random 
          </button>
      </article>
    </React.Fragment>
  )
};

export default Review;
