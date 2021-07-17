/*------- code using only pipe modules----- */


/*Pipes 

//pipes--> it helps the readstream to go to its respective destination which is a writestream


//uncomment 5 lines 
const fs = require('fs')
const read_Stream = fs.createReadStream('./modules/ex2.txt','utf8')
const write_Stream = fs.createWriteStream('./modules/test.txt')
*/


/*
-- to copy what content is present on the readstream onto the writestream 
-- thereby creating a copy of the file

-- use pipe() to do that
*/

/*Pipe (or) copy the read_stream onto a write_stream */

//uncomment below
//read_Stream.pipe(write_Stream)

/*------- END OF  code using only pipe modules----- */



/*PIPE CHAINING / COMPRESSING FILE STARTS HERE */

//const fs = require('fs')

/*zlib -> module used for compressing folder */
//const zlib = require('zlib')

//createGzip() -> makes the file a zip file
//const gzip = zlib.createGzip()

/*code to convert normal file to zip 
***uncomment lines below***

const read_Stream = fs.createReadStream('./modules/ex.txt','utf8')
const write_Stream = fs.createWriteStream('./modules/examples2.txt.gz')

*/
/*compressing readstream into zip and piping (or) pushing it into writestream */
//uncomment line below
//read_Stream.pipe(gzip).pipe(write_Stream)

/*PIPE CHAINING / COMPRESSING FILE ENDS HERE */






/* UNCOMPRESSING COMPRESSED FILE STARTS HERE*/

const fs = require('fs')
const zlib = require('zlib')

//to unzip or uncompress the file
const gunzip = zlib.createUnzip()
/*code to convert zip file to normal 
*/
//uncomment 4lines below
const read_Stream = fs.createReadStream('./modules/examples2.txt.gz')
const write_Stream = fs.createWriteStream('./modules/uncompressed.txt')



/*piping the read stream zipped file and unzipping it and pushing it into write stream */

//uncomment line below
read_Stream.pipe(gunzip).pipe(write_Stream)


/* UNCOMPRESSING COMPRESSED FILE ENDS HERE*/



