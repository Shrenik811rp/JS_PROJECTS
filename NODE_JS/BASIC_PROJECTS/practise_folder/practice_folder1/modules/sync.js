const {readFileSync,writeFileSync} = require("fs")

const first = readFileSync('./content/first.txt','utf8')


const sec = readFileSync('./content/sec.txt','utf8')

writeFileSync('./content/res.txt',`concat : ${first}\n${sec}`,{flag:'a'})

//console.log(first,sec)


const {readFile} = require("fs")
console.log("first task")

readFile('./content/first.txt','utf8',(err,res)=>{
	if(err){
		console.log(err)
		return
	}
	else
	console.log(res)
	console.log("first task completed")

})
console.log("next task")
/*
console.log("first task")
//line of code executes after entire js code finishes executing
setTimeout(()=>{
	console.log("second task")
},0)

console.log("next task")*/