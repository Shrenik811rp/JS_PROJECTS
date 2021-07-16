const fs = require('fs')

//creating a folder or directory
fs.mkdir('test_folder',(err)=>{
	if(err)
	console.log(`error\n`)
	else{
		fs.writeFile('./test_folder/sample.txt',"sample text for testing",(err)=>{
			if(err)
			console.log(`error\n`)
			else
			console.log(`file created\n`)
		})
	}
})

//removing sample.txt

fs.unlink('./test_folder/sample.txt',(err)=>{
	if(err)
	console.log(`error\n`)
	else{
    console.log(`file deleted\n`)

	//removing the folder
	fs.rmdir('./test_folder',(err)=>{
	if(err)
	console.log(`error\n`)
	else
	console.log(`folder deleted\n`)
      })	
	}
	
})




//deleteing multiple files in a folder

fs.readdir('test_folder',(err,files)=>{
	if(err)
	console.log(`error\n`)
	else{
		console.log(`initial folder details: ${files}\n`)

		for(let file of files){
			fs.unlink('./test_folder/'+ file,(err)=>{
			if(err)
			console.log(`error\n`)
			else
			console.log(`files deleted\n`)
				
			})
		}
		console.log(`Final folder details: ${files}\n`)

	}
	
})

