
let red = 0
let blue = 255

function setup() {
	createCanvas(innerWidth / 1.1, innerHeight / 1.2)

}
function draw() {
	console.log(mouseX, mouseY)
	red = map(mouseX, innerWidth / 1.1, innerHeight / 1.2, 0, mouseY)
	background(red, 123, blue)
}