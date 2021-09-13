


let img_classifier
let bird
let label
let prob


const model_ready = () => {
	console.log("Model is ready!!!")
	//prediction of image given and display it using callback function
	img_classifier.predict(bird, prediction_result)
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
		fill(255)
		textSize(50)
		text(`prediction: ${label}`, 0, height - 50)
		createP(`prediction: ${label}`)
		createP(`Confidence / Probabilty: ${Math.round(prob)}%`)
	}
}

//function to fit image within canvas size
const image_fit = () => {
	image(bird, 0, 0, width, height)
}

//main setup
function setup() {
	createCanvas(640, 480);
	bird = createImg('./images/bird4.jpg', image_fit)
	background(0)
	bird.hide()

	//calling the image classifier from ml5
	//using a callback to check if everything is working
	img_classifier = ml5.imageClassifier('MobileNet', model_ready)
}

