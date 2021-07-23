


let img_classifier
//let bird
let my_video
let label = ' '
let prob


const model_ready = () => {
	console.log("Model is ready!!!")
	//prediction of image given and display it using callback function
	//img_classifier.predict(bird, prediction_result)
	img_classifier.predict(prediction_result)
}

//if the model works properly it will display prediction results
//else an error message will display
const prediction_result = (error, result) => {
	if (error) {
		console.log(error)
	}
	else {
		console.log(result)
		label = result[0].label
		prob = result[0].confidence * 100
		img_classifier.predict(prediction_result)
		//createP(`prediction: ${label}`)
		//createP(`Confidence / Probabilty: ${Math.round(prob)}%`)
	}
}

//function to fit image within canvas size
// const image_fit = () => {
// 	image(bird, 0, 0, width, height)
// }

//main setup
function setup() {
	createCanvas(640, 550);
	my_video = createCapture(VIDEO)

	my_video.hide()
	//bird = createImg('./images/bird4.jpg', image_fit)
	//bird.hide()
	background(0)

	//calling the image classifier from ml5
	//using a callback to check if everything is working
	img_classifier = ml5.imageClassifier('MobileNet', my_video, model_ready)
}

//fit video onto the canvas
function draw() {
	background(0)
	image(my_video, 0, 0)
	fill(255)
	textSize(30)
	text(`prediction: ${label}`, 0, height - 20)
}
