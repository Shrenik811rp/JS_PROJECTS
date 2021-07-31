

//importing predefined functions from React
import React, { useState, useEffect } from 'react'

//importing data from Loading.js file
import Loading from './Loading'

//importing data from Tours.js file
import Tours from './Tours'

//url from which we get the api values
const url = 'https://course-api.com/react-tours-project'


function App() {

  //loading will be set to true which means we will see the loading message

  const [loading,setLoad] = useState(true)

  const [tours,setTours] = useState([])


 
  const fetch_api = async()=>{
    /* This function will load data only when the setLoad is TRUE. */
    setLoad(true)

    try {

      //get response from url
      const response = await fetch(url)
      //convert data into json format
      const destination = await response. json()

      console.log(destination)

      //once we get all data we setLoad to false
      setLoad(false)

      //Set the destinations in setTour function
      setTours(destination)

    } 
    
    catch (error) {
      setLoad(false)
      console.log(error)
    }
  }



  /*useEffect will run every time   automatically rerendering the page 

  - So the fetch_api will be called every time useEffect runs
  */
  useEffect(()=>{

    //calling fetch_api function
    fetch_api()

    /*empty dependency array so that the useEffect runs only once

    - And doesnt go on calling fetch_api function  which inturn calls setLoad 
    
    - Which will cause an infinite loop so to stop that we add an empty array
    */
  },[])


  const removeTour = (id)=>{

    const newDestination = tours.filter((tour) => tour.id !== id)

    setTours(newDestination
    )
  }

  /* So this will return messages from Loading.js 
  
  - When the variable "loading" is TRUE this code will run */
  
  if(loading){

    return(
      <React.Fragment>

        <main>
          <Loading/>
        </main>

      </React.Fragment>
    )

  }

  if(tours.length == 0){
    return (

    <React.Fragment>
      <main>
        <div className='title'>
        <h2>No destinations left</h2>
        <button className = 'btn' onClick={fetch_api}>Get destinations</button>
        </div>
      </main>
     

    </React.Fragment>

  )
  }
  return (

    <React.Fragment>
      <main>
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </main>
     

    </React.Fragment>

  )
}

export default App
