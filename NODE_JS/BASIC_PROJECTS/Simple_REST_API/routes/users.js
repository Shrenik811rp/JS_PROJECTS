const { request, response } = require("express");
const express = require("express");
const uuid = require('uuid');


//sample user database local users
let users =[
    // {
    //     firstName:"John",
    //     lastName:"Doe",
    //     age:24
    // },
    // {
    //     firstName:"Mike",
    //     lastName:"Fox",
    //     age:49
    // },
]


//initialise router
const router = express.Router();

//routes start from home
router.get('/',(request,response)=>{
    //take input users and display 
    console.log(users);

    //display response in json format
    response.send(users);
});

//new route
//post request to add new user to database
router.post('/',(request,response)=>{

    const user = request.body;

    //add unique string of chars for every user so we can distinguish
    const userId = uuid.v4();

    const userWithId = { ...user,id:userId}
    //display all current users
    console.log(user);

    //add new user to database
    users.push(userWithId);

    //post request sent new user added
    console.log(`POST route fired`)
    response.send(`POST operation fired\n User firstName: "${user.firstName}" and lastName:"${lastName}"
    id:${userId} added... `)
});



//new route to get particular user details 
//on inputting the unique id the details of user are displayed
router.get("/:id",(request,response)=>{

    //take in user parameters of any specific detail
    const {id } = request.params;
    console.log(id);

    //find user id with the same id in the database
    const findUser = users.find((user) => user.id === id);
    response.send(findUser);


})



//router to delete users with particular id

router.delete('/:id',(request,response)=>{
    const {id} = request.params;
    //filter function

    //keep all users except the id that we want to delete

    //all users whose ids dont match are filter and the matched ones are removed

    //if "id matches" then boolean returns "False"  -> remove user
    //if "id not matches" then boolean returns "True" -> keep user
    users = users.filter((user)=>user.id !== id)

    response.send(`User with id : ${id} deleted from database...`);


});



//change particular user details (update) by giving input id of that user
router.patch('/:id',(request,response)=>{

    //input user id that u want to update
    const {id} = request.params;

    //take all the parameters in the object
    const {firstName,lastName,age} = request.body;


    //goes through array that matches the user id
    const user = users.find((user)=> user.id === id);

    //if we want to update any one of these components
    if (firstName){
        user.firstName = firstName;
    }

    if (lastName){
        user.lastName = lastName;
    }
    if (age){
        user.age = age;
    }

    response.send(`user with id ${id} updated`)


})

module.exports = router;

