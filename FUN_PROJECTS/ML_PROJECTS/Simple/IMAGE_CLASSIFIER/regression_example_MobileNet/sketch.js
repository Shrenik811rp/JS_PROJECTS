


let img_classifier
//let bird
let my_video
let value = 0
let prob
let feature_regressor

//button that captures the image we pass in and later we want the model to classify it

let add_btn
let slider_var
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

		feature_regressor.predict(prediction_result)
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
		value = result.value
		//prob = result[0].confidence * 100
		feature_regressor.predict(prediction_result)
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

	//the image from the video will be modified by applying regression 
	feature_regressor = img_classifier.regression(my_video, video_ready)

	//drawing the slider to the screen

	slider_var = createSlider(0, 1, 0.5, 0.001)

	slider_var.input(() => {
		document.getElementById('slide-val').innerHTML = slider_var.value()
	})

	add_btn = createButton("Add Image")
	add_btn.mousePressed(() => {
		console.log("add image pressed")
		feature_regressor.addImage(slider_var.value())
	})

	train_btn = createButton('train')
	train_btn.mousePressed(() => {

		//the classifier will train itself to learn the image that was passed in
		feature_regressor.train(train_func)
		console.log("train button pressed")
	})
}

//fit video onto the canvas
function draw() {
	background(0)
	image(my_video, 0, 0)

	//draw live rectangle
	rectMode(CENTER)
	fill(255, 0, 200)
	rect(value * width, height / 2, 4, 400)

	fill(255)
	textSize(30)
	text(`prediction: ${float((Math.round(value * 100) / 100).toFixed(2))}`, 0, height - 20)

}
