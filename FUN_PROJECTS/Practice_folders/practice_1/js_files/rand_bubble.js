

let b1
let b2

function setup() {
	createCanvas(innerWidth / 1.1, innerHeight / 1.1)
	b1 = new Bubble(200, 300, 40, 100)
	b2 = new Bubble(100, 400, 20, 200)
	console.log(`setup()`)
}


function draw() {
	background(0)
	b1.move()
	b1.sketch()
	b2.move()
	b2.sketch()
	console.log(`draw()`)
}


class Bubble {

	constructor(tempx, tempy, tempRad, tempColor) {
		this.x = tempx
		this.y = tempy
		this.radius = tempRad
		this.color = tempColor
	}
	move() {
		let rand_val =
			this.x += random(-1, 1)
		this.y += random(-1, 1)
	}

	sketch() {
		stroke(Math.random() * this.color)
		strokeWeight(5)
		noFill()
		ellipse(this.x, this.y, this.radius * 2.5)
	}
}