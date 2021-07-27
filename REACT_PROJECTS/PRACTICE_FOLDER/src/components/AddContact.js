/*class component */

import React from 'react'

//creating a class in jsx

class AddContact extends React.Component{
	render(){
		return(
			<div className="ui main">
				<h1>Add contacts
				</h1>
				<form className="ui form">
				  
					<div className="field">
					<label>Name</label>
					<input type="text" name ="name" placeholder="Enter Name"/>	
					</div>

					<div className="field">
					<label>Email id</label>
					<input type="text" name="email" placeholder="example@gmail.com"/>	
					</div>

					<button className="ui button blue">Add</button>
				</form>

			</div>
		)
	};
}

export default AddContact