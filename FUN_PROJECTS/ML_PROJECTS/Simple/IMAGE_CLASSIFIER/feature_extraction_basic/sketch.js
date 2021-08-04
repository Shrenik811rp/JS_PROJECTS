


let img_classifier
//let bird
let my_video
let label = ' '
let prob
let feature_classifier

//button that captures the image we pass in and later we want the model to classify it

let pen_btn
let phone_btn
let train_btn

const video_ready = () => {
	console.log("Video is ready!!!")

}

const model_ready = () => {
	console.log("Model is ready!!!")
	//prediction of image given and display it using callback function
	//img_classifier.predict(bird, prediction_result)
	//img_classifier.predict(prediction_result)
}



const train_func = (loss) => {
	if (loss == null) {
		document.getElementById('complete').innerHTML = "Model Training Complete!!!"
		console.log('training complete')
		//once training is complete ,once the model has learnt from the labels and images i passed in. we classify!!!

		feature_classifier.classify(prediction_result)
	}
	else {
		console.log(`error : ${loss}`)
	}

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
		feature_classifier.classify(prediction_result)
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

	//calling the feature extractor from ml5 because now we will train the model with our images
	//using a callback to check if everything is working
	img_classifier = ml5.featureExtractor('MobileNet', model_ready)

	//the image from the video will be classified and sent to img_classifier 
	feature_classifier = img_classifier.classification(my_video, video_ready)

	pen_btn = createButton('Happy')
	pen_btn.mousePressed(() => {
		/*Every time i press the button with label "pen" take an image from the live video */
		feature_classifier.addImage('Happy')
		console.log("happy button pressed")
	})

	phone_btn = createButton('Sad')
	phone_btn.mousePressed(() => {
		/*Every time i press the button with label "pen" take an image from the live video */
		feature_classifier.addImage('Sad')
		console.log("sad button pressed")
	})

	train_btn = createButton('train')
	train_btn.mousePressed(() => {

		//the classifier will train itself to learn the image that was passed in
		feature_classifier.train(train_func)
		console.log("train button pressed")
	})
}

//fit video onto the canvas
function draw() {
	background(0)
	image(my_video, 0, 0)
	fill(255)
	textSize(30)
	text(`prediction: ${label}  confidence: ${(Math.round(prob * 100) / 100).toFixed(2)}%`, 0, height - 20)
}
