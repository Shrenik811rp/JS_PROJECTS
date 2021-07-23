// let img;
let my_video;
// contains the individual result
let obj_detector;

//array that will store all the results
let detections = [];
let object

let text_result

function preload() {
	//loading object detection model from cocossd dataset
	obj_detector = ml5.objectDetector('cocossd');
}

//function to display detection results
function display_result(error, results) {
	if (error) {
		console.error(error);
	}

	//if everything works fine
	//place results in the detection array
	detections = results;
	obj_detector.detect(my_video, display_result);
}


//create a canvas where we place the video
function setup() {
	createCanvas(640, 480);

	//capture the video from the webcam
	//use default "VIDEO"
	my_video = createCapture(VIDEO);
	my_video.size(640, 480);

	//hide the default video that is displayed
	my_video.hide();

	//detect object from the video and display results using callback
	obj_detector.detect(my_video, display_result);
}

function draw() {
	image(my_video, 0, 0);

	//display the object from the results 
	// which were predicted from the ml5 objectdetector from cocodataset

	//looping through each frame of video and getting each frames result
	for (let i = 0; i < detections.length; i++) {
		object = detections[i];
		console.log(`Result: ${object.label}\n Confidence: ${object.confidence}`)
		//color of border
		stroke(0, 255, 0);
		strokeWeight(4);
		noFill();

		//boundary of object
		rect(object.x, object.y, object.width, object.height);
		noStroke();
		fill(255);
		textSize(24);

		//display prediction results on screen
		text_result = `${object.label} [confidence:${Math.round((object.confidence) * 10000) / 100}%]`
		text(text_result, object.x + 10, object.y + 24);
	}
}