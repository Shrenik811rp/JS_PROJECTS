
//built in module
const os_l = require('os')

//info user
const user = os_l.userInfo()
console.log(user)

//sys uptime in sec
const time = os_l.uptime()
console.log(time)

const curr_os = {
	name:os_l.type(),
	release:os_l.release(),
	free:os_l.freemem()
}

console.log(curr_os)