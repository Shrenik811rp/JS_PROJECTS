const {readFile, writeFile} = require('fs').promises

/*
//using util predifined module
const util_var = require('util')
const readFilePromise = util_var.promisify(readFile)
const writeFilePromise = util_var.promisify(writeFile)

*/


const start = async()=>{

	try {
		const first = await readFile("./content/first.txt",'utf8')
		const second = await readFile("./content/sec.txt",'utf8')
		await writeFile ('./content/res.txt',`\nResult text: \n${first} \n${second}`,{flag:'a'})

		console.log("This is the first and second text file")

		console.log(first,second)
	} catch (error) {
		console.log("ERROR CODE!!! in start() function")
		console.log(error)
	}
	
}
start()







/*
const get_text = (path) =>{
	return new Promise((resolve,reject)=>{
		
readFile(path,'utf8',(err,res)=>{
	if(err){
		console.log("error code")
		reject(res)
	}
	else{
		console.log(res)
		resolve(res)
	}
})
	})
}
*/