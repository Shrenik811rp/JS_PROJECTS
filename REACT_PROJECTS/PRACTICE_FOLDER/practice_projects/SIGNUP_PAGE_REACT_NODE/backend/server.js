const express = require('express')

const app = express()


const mongoose = require('mongoose')

const dotenv = require('dotenv')


//connecting the route.js so that server knows a route is there

const routeUrl = require('./route/routes')


const cors = require('cors')
//store the mongodb location server in .env file
dotenv.config()

//connect mongodb database
mongoose.connect(process.env.DATABASE_ACCESS,{ useNewUrlParser: true }, () =>
    console.log('Database connected'))



    
/*Initialise route as middleware
using app.use()
base path : /app

routeUrl will be appended to /app
and move to that particular url

so /app/signup is an example from routes.js
*/


app.use(express.json())
app.use(cors())
app.use('/app',routeUrl)    
app.listen(3000,()=>console.log('server running at port 3000'))