
//import mongoose 
const mongoose = require('mongoose')

//signup template we want to store
const signUpTemplate = new mongoose.Schema({
  
    
    /*Details we will store */

    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        /*Stores time when user signs up */

        type:Date,
        default:Date.now
    }
})

//export the mongoose module
module.exports = mongoose.model('table',signUpTemplate)