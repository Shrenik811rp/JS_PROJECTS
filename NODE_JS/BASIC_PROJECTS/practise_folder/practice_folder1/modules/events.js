

let run_time = new Date()

//events
const event_emitter = require('events')
const event_emit1 = new event_emitter()

//listener
//-> event module --> on()
//two arg-> on(listener,function to execute)
event_emit1.on('listener',(num1,num2)=>{
	console.log('Event emitter is listening...')
	console.log(`The sum of ${num1} + ${num2} = ${num1+num2} -> time :  ${run_time.getMilliseconds()}`)
})

//we have to emit the event once listening is complete
/*event_emit1.on('listener') === event_emit1.emit("listener") 

--> both arguments in the emit() and on() must be the same*/
event_emit1.emit("listener",2,3)


//class Person inherits the event_emitter class properties
class person extends event_emitter{

	//constructor to initialise variables
	constructor(name){

		//super() -> used when a class inherits the parents properties and we have to use them using 'this'
		super()
		this.Name = name
	}

	//get -> property to get the name of the person 
	//so we return the inputted name 
	get input_name(){
		return this.Name
	}
}


let person1 = new person('Samuel Jackson')
let person2 = new person("Janku Tamul")

//listening for first person input
person1.on('name',()=>{
	console.log(`My name is ${person1.input_name}-> time :  ${run_time.getMilliseconds()}`)
	
})

//listening for second person input
person2.on('second name',()=>{
	console.log(`The second person is : ${person2.input_name} -> time :  ${run_time.getMilliseconds()}`)
})


person1.emit('name')
person2.emit('second name')



module.exports = person2