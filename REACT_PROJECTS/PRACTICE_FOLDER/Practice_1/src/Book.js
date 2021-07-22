import React from 'react'


const Book = (temp) => {
	{/*to display children props we need to pass it as as argument and use special keyword "children"

  , children
*/ }
	const { title, img, author } = temp

	//event handlers and attributes

	const click_message = () => {
		alert("Do you want to buy?")
	}
	console.log(`temp object in "Book" ${temp}`)
	return (

		<article className="book_detail" onMouseOver={() => {
			alert(title)
		}}>
			{/*So when we click on the title of the book the event is called and mesage displayed */}
			<h3 onClick={() => {
				alert(`Do you like :: ${title}?`)
			}}>{title}</h3>
			<img src={img} alt={title} />
			<h4>{author}</h4>
			{/*So when we click on the button of the book the event "click_message" is called and message displayed */}
			<button type="button" onClick={click_message}>Buy now</button>
			{/*{children} */}
		</article>
	)
}

export default Book