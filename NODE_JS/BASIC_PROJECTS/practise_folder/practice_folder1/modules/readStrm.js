const fs_mod = require('fs')

const time = new Date()

//read input stream from input text file and display the output
const read_stream = fs_mod.createReadStream('./modules/ex.txt','utf8')

const write_stream = fs_mod.createWriteStream('./modules/ex2.txt','utf8')
read_stream.on('data',(chunk)=>{
	console.log(`time-> ${time.getMilliseconds()}`)
	console.log(`Data : ${chunk}\n`)
})

//write stream
//copy text from ex.txt to ex2.txt
read_stream.on('data',(chunk)=>{
	write_stream.write(chunk)
})

//the readstream inherits properties from event emitter
//so it listens for 'data'
/*we are going to get a "chunk" of data
-- which means only parts of data and not whole data at once, little by little */
/*
const read_stream =
read_stream.on('data',(chunk)=>{
console.log(`Data : ${chunk}\n`)
})*/const fs_mod = require('fs')

const time = new Date()

//read input stream from input text file and display the output
const read_stream = fs_mod.createReadStream('./modules/ex.txt','utf8')

const write_stream = fs_mod.createWriteStream('./modules/ex2.txt','utf8')
read_stream.on('data',(chunk)=>{
	console.log(`time-> ${time.getMilliseconds()}`)
	console.log(`Data : ${chunk}\n`)
})

//write stream
//copy text from ex.txt to ex2.txt
read_stream.on('data',(chunk)=>{
	write_stream.write(chunk)
})

//the readstream inherits properties from event emitter
//so it listens for 'data'
/*we are going to get a "chunk" of data
-- which means only parts of data and not whole data at once, little by little */
/*
const read_stream =
read_stream.on('data',(chunk)=>{
console.log(`Data : ${chunk}\n`)
})*/