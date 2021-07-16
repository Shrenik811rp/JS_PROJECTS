const http_l = require("http")

const server = http_l.createServer((req,res)=>{
	if(req.url === '/'){
		console.log("Home page")
		res.end("Home page")
	}
	
	else if(req.url === '/about'){
		//blocking code
	for(let i =0;i<500;i++){
		for(let j=0;j<i;j++)
		{
			console.log(`${i}`)
		}
	}
		console.log("About page")
		res.end("About page")
	}
	else{
		console.log("error page")
		res.end("Error page")
	}
	
})


server.listen(5000,()=>{
	console.log("server listening...")
})