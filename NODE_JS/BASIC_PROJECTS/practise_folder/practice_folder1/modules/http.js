const http = require('http')

const server = http.createServer((req,res)=>{
	if(req.url === '/'){
		res.end("home")
	}
	if(req.url === '/about'){
		res.end("about")
	}
	res.end(`<h1>40004</h1>`)
})

server.listen(5000)

