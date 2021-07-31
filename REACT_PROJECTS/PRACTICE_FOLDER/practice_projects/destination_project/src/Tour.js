


import React, { useState } from 'react';

const Tour = ({id,image,info,name,price,removeTour}) => {

/*TO create read more and read less toggle button */

const [readMore,setMore] = useState(false)



  
  return(
    <React.Fragment>

    <section className='single-tour'>
    <img src={image} alt={name}/>

    <footer>
    <div className='tour-info'>
    <h4>{name}</h4>
    <h4 className='tour-price'>{price}Rs</h4>
    </div>

    {/*If readMore is true then display full info about destination else 
    
    if readmore is false then display only info upto 100 strings */}
    <p>{readMore? info: `${info.substring(0,150)}...`}
    
    {/*Create a button to readmore or readless 
    
    - Create a toggle button
    - Initially readMore is set to false so it shows only substring

    - When we click the button it NOTS the function

    - So if readMore is true that means we are seeing full info and "See less" needs to be as button

    - And vice - versa 
    */}
    <button onClick={()=> setMore(!readMore)}>
    {readMore ? 'show less': 'read more'}
    </button>
    
    </p>
    {/*Remove each tour by id */}
    <button className='delete-btn' onClick = {() => removeTour(id) }>Remove destination</button>
    </footer>
    </section>
    </React.Fragment>

  ) 

};

export default Tour;
