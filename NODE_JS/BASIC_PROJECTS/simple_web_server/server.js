
const http = require('http')
//to read files we need read/write modules
const fs = require('fs')

const port_no = 5000

const server = http.createServer((my_request,my_response)=>{
	my_response.writeHead(200,{'Content-Type':'text/html'})

	fs.readFile('index.html',(error,result)=>{
		if(error){
			my_response.writeHead(404)
			my_response.write('You got an error, File not found ')
		}
		else{
			my_response.write(result)
		}
		my_response.end()
	})

})

server.listen(port_no,(error)=>{
	if(error){
		console.log(`You got error : ${error}`)
	}
	else{
		console.log(`server listening at port ${port_no}`)
	}
})