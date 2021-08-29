
/*Acts as the client interface and connects to server.js to store data and start server


To create a signup template
*/

const express = require("express")

const router = express.Router()

const signedupCopy = require('../models/signupModels')

/*Since signup page we post data 

use callback function

router path -> /signup
*/
router.post('/signup',(request,response)=>{

    /*Create an instance of signedupModel class
    
    with respective attributes
    */
    const signedUser = new signedupCopy({

        //grab details of user like full name of value entered by user
        fullName : request.body.fullName,
        username : request.body.username,
        email: request.body.email,
        password :  request.body.password

    })

    //store data
    signedUser.save()

    /*Once we get data send the response as a json file else send error message as json */
    .then(data => {
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
   
})


module.exports = router