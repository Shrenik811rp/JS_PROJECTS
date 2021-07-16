//modules
/*const john ="john"
const lily= 'lily'*/
/*const sayHi =(name)=>{
	console.log(`Say hi ${name}`)
}
*/

const sum = (num1,num2)=>{
return num1 + num2
}
const PI = 3.14
class test_obj{
	constructor(){
		console.log(`object created`)
	}
}
module.exports = {
	sum:sum,
	PI : PI,
	test_obj : test_obj
}

/*

-----app.js----
-----------------
const sayhi = require('./modules/sayhi')
console.log(`sum function: ${sayhi.sum(2,4)}`)
console.log(`Value of PI: ${sayhi.PI}`)
console.log(`Object info : ${new sayhi.test_obj()}`)

*/