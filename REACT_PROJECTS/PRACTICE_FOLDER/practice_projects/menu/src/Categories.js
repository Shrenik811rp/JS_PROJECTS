import React from 'react';

const Categories = ({categories,filterItems}) => {
  return (

    <>
    <div className="btn-container">
      {/*This is how we add button dynamically 
      
      We go through all the elements dynamically 
      So we can add more categories and new data items
      
      */}
      {categories.map((category,index)=>{
        return <button 
        type ="button" 
        className="filter-btn"
        key={index} 
        onClick={()=>filterItems(category)}>

          {category}
        </button>
      })}




      {/*This is how we add buttons manually  */}
    {/*   <button className="filter-btn" onClick={()=>filterItems("all")}>
        all
      </button>

      <button className="filter-btn" onClick={()=>filterItems("breakfast")}>
        breakfast
      </button> */}

    </div>
    </>
  );
};

export default Categories;
