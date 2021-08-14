import React from 'react';
import Review from './Review';

function App() {
  return (
    <React.Fragment>
      <main>
        <section className="container">
          <div className="title">
            <h2>reviews</h2>
            <div className='underline'></div>
          </div>
          <Review></Review>
        </section>
      </main>
    </React.Fragment>
  )
}

export default App;
