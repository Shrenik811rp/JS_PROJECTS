
/*
let bubble_arr = []

function setup() {

	createCanvas(innerWidth / 1.1, innerHeight / 1.1)
	for (let i; i < 3; i++) {
		let x = random(width)
		let y = random(height)
		let rad = random(20, 60)
		let bble = new Bubble(x, y, rad)
		bubble_arr.push(bble)
	}
}

function draw() {
	background(0)
	for (let i = 0; i < bubble_arr.length; i++) {
		bubble_arr[i].move();
		bubble_arr[i].sketch();
	}

}

function mouseClick() {
	for (let i = 0; i < bubble_arr.length; i++) {
		bubble_arr[i].clicked(mouseX, mouseY)
	}
}

class Bubble {
	constructor(tempX, tempY, tempRad) {
		this.x = tempX
		this.y = tempY
		this.radius = tempRad
		this.brightness = 0
	}

	move() {
		this.x += random(-2, 2);
		this.y += random(-2, 2);
	}

	clicked(mX, mY) {
		let d = dist(mX, mY, this.x, this.y)
		if (d < this.radius) {
			this.brightness = 255
		}
	}
	sketch() {
		stroke(255)
		strokeWeight(5)
		fill(this.brightness, 125)
		ellipse(this.x, this.y, this.radius * 2)
	}
}
*/


let bubbles = [];

function setup() {
	createCanvas(600, 400);
	for (let i = 0; i < 10; i++) {
		let x = random(width);
		let y = random(height);
		let r = random(20, 60);
		let b = new Bubble(x, y, r);
		bubbles.push(b);
	}
}

function mousePressed() {
	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].clicked(mouseX, mouseY);
	}
}

function draw() {
	background(0);
	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].move();
		bubbles[i].show();
	}
}

class Bubble {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.brightness = 0;
	}

	clicked(px, py) {
		let d = dist(px, py, this.x, this.y);
		if (d < this.r) {
			this.r /= Math.random() * 2
			this.brightness = Math.random()
				* 255
		}
		if (d < this.r / 2) {
			this.r *= Math.random() * 1.1
		}
	}

	move() {
		this.x = this.x + random(-2, 2);
		this.y = this.y + random(-2, 2);
	}

	show() {
		stroke(255);
		strokeWeight(4);
		fill(this.brightness, 125, 11, 222);
		circle(this.x, this.y, this.r * 2);
	}
}