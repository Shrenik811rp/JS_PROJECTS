
import React from 'react'
import './App.css'

/*importing all js modules which we created */
import Header from "./Header"
import AddContact from "./AddContact"
//import ContactList from './ContactList'

function App() {
  /*jsx -> js + html syntax */
  return (
    <div>
    <Header/>
    <AddContact/>
    </div>
  );
}

export default App
