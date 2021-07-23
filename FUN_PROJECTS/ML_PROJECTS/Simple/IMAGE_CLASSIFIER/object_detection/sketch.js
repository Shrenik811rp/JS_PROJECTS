
let my_img

let obj_detector
let object

let text_result

function preload() {
	my_img = loadImage('./images/img2.jpg')
	obj_detector = ml5.objectDetector("cocossd")

}

function display_result(error, results) {
	if (error) {
		console.log(error)
	}
	else {

		for (let i = 0; i < results.length; i++) {

			object = results[i]
			stroke(0, 255, 0)
			strokeWeight(4)

			noFill()
			rect(object.x, object.y, object.width, object.height)
			obj_detector.detect(my_img, display_result)

			text_result = `predict: ${object.label} | confidence: ${Math.round((object.confidence) * 10000) / 100}%`
			noStroke()
			fill(255)
			textSize(40)
			text(text_result, object.x - 150, object.y - 10)

			//console.log(results)
		}
	}
	//createP(object.label)
	//createP(object.confidence)
}

function setup() {
	createCanvas(700, 740)
	//load_img()
	obj_detector.detect(my_img, display_result)
	console.log(`Object_detector contains: \n${obj_detector}`)


}

function draw() {
	image(my_img, 0, 0, width, height)
}