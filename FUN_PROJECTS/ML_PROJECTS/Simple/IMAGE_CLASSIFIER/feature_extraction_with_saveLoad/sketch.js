


let img_classifier
//let bird
let my_video
let label = 'Loading Model'
let prob
let feature_classifier

//button that captures the image we pass in and later we want the model to classify it

let happy_btn
let sad_btn
let train_btn
let save_btn

const video_ready = () => {
	console.log("Video is ready!!!")
}

const model_ready = () => {
	document.getElementById('complete').innerHTML = "Model is ready!!!"
	console.log("Model is ready!!!")


	//loading data that was saved by us in json file

	//when you want to train the model comment it out
	feature_classifier.load('model.json', customModelReady)
}

const customModelReady = () => {
	document.getElementById('complete').innerHTML = "Custom Model Ready"
	console.log('Custom model ready')

	//Once you have trained the model with your data
	// Once you have performed Feature Extraction unccoment these two lines

	//This will call the new model that we have created using the local data

		label = 'Model Ready!'
	
		feature_classifier.classify(prediction_result)
}

//uncomment to train a new model 
//once done training and once saved and loaded we comment it again

/*
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
*/


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
	}
}


//main setup
function setup() {
	createCanvas(640, 550);
	my_video = createCapture(VIDEO)

	my_video.hide()

	background(0)

	//calling the feature extractor from ml5 because now we will train the model with our images
	//using a callback to check if everything is working
	img_classifier = ml5.featureExtractor('MobileNet', model_ready)

	//the image from the video will be classified and sent to img_classifier 
	feature_classifier = img_classifier.classification(my_video, video_ready)



	/*Once we have trained the model with our own local data 
	 - And once we have saved and loaded the model 
	 - We dont need the buttons anymore so comment them out
	 - If you want to train new data we uncomment them and train a new model
	 - And finally save the model data with 'Save" button
	*/

	
	// happy_btn = createButton('Happy')
	// happy_btn.mousePressed(() => {
	// 	/*Every time i press the button with label "pen" take an image from the live video */
	// 	feature_classifier.addImage('Happy')
	// 	console.log("happy button pressed")
	// })

	// sad_btn = createButton('Sad')
	// sad_btn.mousePressed(() => {
	// 	/*Every time i press the button with label "pen" take an image from the live video */
	// 	feature_classifier.addImage('Sad')
	// 	console.log("sad button pressed")
	// })

	// train_btn = createButton('train')
	// train_btn.mousePressed(() => {

	// 	//the classifier will train itself to learn the image that was passed in
	// 	feature_classifier.train(train_func)
	// 	console.log("train button pressed")
	// })

	// save_btn = createButton('Save Model')
	// save_btn.mousePressed(() => {

	// 	//the classifier will train itself to learn the image that was passed in
	// 	feature_classifier.save()
	// 	console.log("save button pressed")
	// })
}

//fit video onto the canvas
function draw() {
	background(0)
	image(my_video, 0, 0)
	fill(255)
	textSize(30)
	text(`prediction: ${label}  confidence: ${float((Math.round(prob * 100) / 100).toFixed(2))}%`, 0, height - 20)
}
