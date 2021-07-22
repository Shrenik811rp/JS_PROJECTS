
//don't need to specify path as react is predefined module
import React from 'react'
//to render js element or link it to html page
import ReactDom from 'react-dom'

//importing css file
import './css/index.css'

//object file of all the books
import { book_arr } from './book_detl'

//functionality of the webpage imports
import Specific_book from './Book'


const BookList = () => {
  return (

    <section className="book_list">

      {book_arr.map((book_item) => {
        console.log(`Book item in BookList: ${book_item}`)
        const { title, img, author } = book_item
        {/*We must provide key value of "id" so that React doesnt throw errors in console 

      Normal method:
      <Book key={book_item.id} book_item={book_item}></Book>
      */ }

        {/*spread operator
        
          So we spread out all the properties of "book_item"
          with all its properties -> id,author,img,title
        */ }
        return (
          <Specific_book key={book_item.id} {...book_item}></Specific_book>
        )
      })}
    </section>
  );
}
{/* return (
          <div>
            <h2>{title}</h2>
            <h4>{author}</h4>
            <img src={img} alt={title} />
          </div>
        )*/}

{/*
      <Book title={first_book.title} author={first_book.author} img={first_book.img}>

        Children for props parameters 

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque porro alias repellat dignissimos consequuntur dolorem cumque dicta cupiditate soluta sunt voluptas sint harum officiis accusamus nihil nesciunt, earum optio nisi?</p>
      
      </Book>

      <Book title={second_book.title} author={second_book.author} img={second_book.img} />
  */}

/*To render or place the js element in html page use -> */

ReactDom.render(<BookList />, document.getElementById('root'))
