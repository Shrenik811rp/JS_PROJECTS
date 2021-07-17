


//working with server
const http = require('http')
//reading and writing files
const fs = require('fs')
const server = http.createServer((my_request,my_response)=>{

	if(my_request.url === '/'){
		console.log(`Server listening...`)
		const read_Stream = fs.createReadStream('./modules/ex.txt')
	
		my_response.writeHead(200,{"Content-type":'text'})
		read_Stream.pipe(my_response)
	}
	else{
		my_response.write("Go to home page")
		my_response.end()
	}
	
})


//server listening at port 5000
server.listen('5000')
