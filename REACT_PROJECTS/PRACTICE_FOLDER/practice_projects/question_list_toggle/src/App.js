import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  const [questions] = useState(data)
  //console.log(questions)
  return (
    <React.Fragment>
      <main>
        <div className="container">
          <h3>Questions list</h3>
        <section className="info">
        {
          questions.map((question) =>{
            return <SingleQuestion key={question.id} {...question}></SingleQuestion>
          })
        }
        </section>
       
        </div>
     
      </main>
    </React.Fragment>
  )
}

export default App;
