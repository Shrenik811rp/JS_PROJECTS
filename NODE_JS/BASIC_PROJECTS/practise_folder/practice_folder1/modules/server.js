const http_l = require('http')

const server = http_l.createServer((request,response)=>{
	console.log("request sent")
	response.end("complete request")
})

server.listen(5000,()=>{
	console.log("server listening at port 5000.")
})


module.exports = server