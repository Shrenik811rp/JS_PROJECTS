# Face expression detection using FaceAPI

- ### face-api.jsis a javascript module, built on top of tensorflow.js core,<br> which implements several CNNs (Convolutional Neural Networks) to solve face detection,<br> face recognition and face landmark detection, optimized for the web and for mobile devices.
## Demo of what FaceAPI can do:
![](https://user-images.githubusercontent.com/31125521/57224752-ad3dc080-700a-11e9-85b9-1357b9f9bca4.gif)

## Getting data:
- We have to pretrained dataset from [model](https://github.com/Shrenik811rp/JS_PROJECTS/tree/master/FUN_PROJECTS/ML_PROJECTS/Simple/IMAGE_CLASSIFIER/Face_expression_detection/models) folder
- Then add faceAPI.js data

## Recognizing Face Expressions
- Face expression recognition can be performed for detected faces as follows:
Detect all faces in an image + recognize face expressions of each face. 
```javascript
const detectionsWithExpressions = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceExpressions()

```

## Detecting 68 Face Landmark Points
- After face detection, we can furthermore predict the facial landmarks for each detected face as follows:
Detect all faces in an image + computes 68 Point Face Landmarks for each detected face. 

```javascript
const detectionsWithLandmarks = await faceapi.detectAllFaces(input).withFaceLandmarks()
```
![](https://miro.medium.com/max/1302/1*GCqsG3c2Xt-d9JQGUpytpQ.gif)
## Download the necessary apis:
### [API_link](https://github.com/Shrenik811rp/JS_PROJECTS/blob/master/FUN_PROJECTS/ML_PROJECTS/Simple/IMAGE_CLASSIFIER/Face_expression_detection/face-api.min.js)

## Resources:
- ### FaceAPI resources which I referred to do the project [Doc](https://justadudewhohacks.github.io/face-api.js/docs/index.html)
- ### Theory [documentation](https://itnext.io/face-api-js-javascript-api-for-face-recognition-in-the-browser-with-tensorflow-js-bcc2a6c4cf07)
