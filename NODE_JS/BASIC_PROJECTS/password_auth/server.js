
//call expres library
const express = require('express')

//use express module
const app = express()

//import bcrypt module
const bcrypt = require('bcrypt')


//to use json data
app.use(express.json())

//store users
const user_list = []
//create a route to get all user info
app.get('/users',(my_request,my_response)=>{
	my_response.json(user_list)
})


//creating user
//hashing the password -> making the password secure
//save password in user list
app.post('/users',async (my_request,my_response)=>{
	/*
	const user ={ name:my_request.body.name,password:my_request.body.password}

	user_list.push(user)
	my_response.status(201).send()
	*/
	try {

		//salt makes sure every hash is unique and makes it difficult to figure the password

		//generate a salt 
		const salt = await bcrypt.genSalt()

		//hash the password that we get from user 
		//append the unique salt value to the hashed value
		const hashed_pass = await bcrypt.hash(my_request.body.password,10)

		//display the results
		console.log(`The salt tag: ${salt}`)
		console.log(`The hashed password: ${hashed_pass}`)

		const user = {name:my_request.body.name,password:hashed_pass}

		user_list.push(user)
		my_response.status(201).send()
	} 
	catch (error) {
		console.log(".Error.Try again!!")
		my_response.status(500).send("Error message")
	}
})


app.post('/users/login',async(my_request,my_response)=>{
	const user = user_list.find(user => user.name === my_request.body.name)

	if(user === null)
	{
		return my_response.status(400).send("Such a user doesnt exist!! Are you a ghost?")
	}

	//bcrypt is comapring the entered password and hashed password to see if both match else error
	try {
		if(await bcrypt.compare(my_request.body.password,user.password)){
			//if password match
			console.log("Password matched successfully")
			my_response.send('Password matched successfully')
		}
		else{
			//if password not match
			console.log("Passwords don't match. Try again")
			my_response.send("Passwords don't match. Try again")
		}
		
	} catch (error) {
		console.log(".Error.Try again!!")
		my_response.status(500).send(".Error.Try again!!")
	}
})
//web server listens at  port 5000 
app.listen(5000)


console.log("server started")