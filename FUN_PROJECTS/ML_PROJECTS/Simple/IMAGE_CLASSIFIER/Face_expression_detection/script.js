

//variable that holds video tag
const video = document.getElementById('video')

/*Hookup webcam to be accessed by video element  */
const startVideo =()=>{

  //get webcam and take video as first parameter
  navigator.getUserMedia(
    {
      video: {} 
    },

    //stream of frames from webcam video
      stream => video.srcObject = stream,

      //if we get error console.log it
      err => console.error(err)
  )
}

/* Run all asynchronous calls

Promise.all will run all these functions asynchronously and make it fast
*/
Promise.all([

  //detect face 
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),

  //set landmarks of face parts
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),

  //api to recognise where face is and put a box around it
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),

  //detect expression
  faceapi.nets.faceExpressionNet.loadFromUri('/models')

  /*Only after getting all these modules start the video 
  For face detection
  */
]).then(startVideo)




//play video
video.addEventListener('play',()=>{
  console.log("model ready")

  //adding the landmark over the video element
  const canvas = faceapi.createCanvasFromMedia(video)

  //add canvas to video
  document.body.append(canvas)

  //get displaysize of video so canvas is placed over the face
  const displaySize = {width:video.width,height:video.height}


  /*The canvas that is drawn over the face must match the video frame dimensions 
  
  So that the canvas can be placed properly on the face
  */
  faceapi.matchDimensions(canvas,displaySize)


  /*Detect the face after an interval
  
  Make it async because faceapi is asynchronous

  */
  setInterval(async ()=>{

    //detect all face
    /*And we want to detect a face, face features, face expression from the face api */
    const  detections = await faceapi.detectAllFaces(video,
      new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()

    //displays an object list of all the json data the faceapi is displaying
    console.log(detections)


    //box and landmarks are properly sized over the video
    const resizedDetections = faceapi.resizeResults(detections,displaySize)


    //after each interval we want to remove th rectangle over the face 
    //so that we dont get overlapping drawings of face rectangles
    canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height)

    //call the face api and apply the rectangle box to detect a face
    faceapi.draw.drawDetections(canvas,resizedDetections)

    //call the face api to draw the landmarks on the face for mouth,nose,eyes
    faceapi.draw.drawFaceLandmarks(canvas,resizedDetections)

    //faceapi to detect expression of face
    faceapi.draw.drawFaceExpressions(canvas,resizedDetections)


    //interval of 10ms from one frame to another
  },100)

})


















// const video = document.getElementById('video')

// Promise.all([
//   faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
//   faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
//   faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
//   faceapi.nets.faceExpressionNet.loadFromUri('/models')
// ]).then(startVideo)

// function startVideo() {
//   navigator.getUserMedia(
//     { video: {} },
//     stream => video.srcObject = stream,
//     err => console.error(err)
//   )
// }

// video.addEventListener('play', () => {
//   const canvas = faceapi.createCanvasFromMedia(video)
//   document.body.append(canvas)
//   const displaySize = { width: video.width, height: video.height }
//   faceapi.matchDimensions(canvas, displaySize)
//   setInterval(async () => {
//     const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
//     const resizedDetections = faceapi.resizeResults(detections, displaySize)
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
//     faceapi.draw.drawDetections(canvas, resizedDetections)
//     faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
//     faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
//   }, 100)
// })