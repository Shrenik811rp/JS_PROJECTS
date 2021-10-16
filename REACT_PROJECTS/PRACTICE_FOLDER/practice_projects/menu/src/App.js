import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';



//using Set to remove repeating values 
//here we add 'all' to the list
const allCategories = ['all',... new Set(items.map((item) =>item.category))]
console.log(allCategories)


function App() {

  const [menuItems,setMenuItems] = useState(items)

  //move through all the categories
  const [categories,setCategories] = useState(allCategories)


  const filterItems = (category)=>{

    if(category === "all"){
      setMenuItems(items)
      return;
    }

    const newItems = items.filter((item) => item.category === category)

    setMenuItems(newItems)
  }

  return (

    <>
    <main>
      <section className="menu section">

        <div className="title">
          <h2>Menu</h2>
          <div className="underline">
          </div>
        </div>

        {/*Move through all categories */}
        <Categories categories={categories}
        filterItems ={filterItems}/>
        
        <Menu items={menuItems}/>

      </section>
    </main>
    </>


  );
}

export default App;
