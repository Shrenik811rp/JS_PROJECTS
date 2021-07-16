//prompt user and get user input
//using readline module
const read_line = require('readline')
const rdline = read_line.createInterface(
	{
	//input stream 
	input:process.stdin,
	//output stream
    output:process.stdout
   })

console.log(`readline variable : ${rdline}`)
let num1 = Math.floor(Math.random()*10 + 1)
let num2 = Math.floor(Math.random()*10 + 1)
let sum = num2 + num1

rdline.question(`What is ${num1} + ${num2} ?? \n`,
(user_input)=>{
	console.log(`User's answer: ${user_input}`)
	
    //listening for userinput
    rdline.on('line',(user_input)=>{
	
	//parseInt() ->converts string to integer
	/*trim()->Removes the leading and trailing white space and line terminator characters from a string.*/
	if(parseInt(user_input.trim()) === sum){
		//if the answer matches then close the readline input
		/*here we emit 'close()' event */
		rdline.close();
	}
	
	else{
		/*If we want to continue even after user gets it wrong
		
		-- Then we have to prompt a message -> setPrompt()
		-- Then call the prompt question again... -> prompt() */
		rdline.setPrompt(`Wrong :( Try again\n`)
		rdline.prompt()
	}

  })
})


/*
Here we listen for the user input 
to "close()" event readline interface 
*/

/*
This will execute when we close the readline interface
-- so if you force stop the session by Ctrl + C 
-- this message will display
*/

rdline.on('close',()=>{
	console.log(`\nCorrect answer!!!`)
	console.log(`\t\t** OR ** (Ctrl + C) pressed : Force stopped session\n`)
})

