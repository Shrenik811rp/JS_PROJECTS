const fs_mod = require('fs');

 fs_mod.createReadStream();



//the readstream inherits properties from event emitter
//so it listens for 'data'
/*we are going to get a "chunk" of data
-- which means only parts of data and not whole data at once, little by little */
/*
const read_stream =
read_stream.on('data',(chunk)=>{
console.log(`Data : ${chunk}\n`)
})*/