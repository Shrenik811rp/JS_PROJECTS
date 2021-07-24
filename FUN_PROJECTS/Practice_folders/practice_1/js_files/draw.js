function setup(error, result) {
	if (error) {
		console.log("youve got error")
		console.log(error)
	}
	else {
		console.log('setup function called')
		createCanvas(innerWidth / 1.1, 600)
		background(0)
	}

}

function draw(error, result) {
	if (error) {
		console.log("youve got error")
		console.log(error)
	}
	else {
		let rndm_colr = 255
		console.log('draw function called')
		noStroke()
		fill(rndm_colr)
		circle(mouseX, mouseY, 20)
	}
}

function mousePressed() {
	background(0)
}

