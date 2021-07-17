
//express module returns a function
const express = require('express')

//call express modules
const server = express()

server.get('/',(my_request,my_response)=>{
my_response.send("Server listening")
})

//server listens at port 5000
server.listen(5000)