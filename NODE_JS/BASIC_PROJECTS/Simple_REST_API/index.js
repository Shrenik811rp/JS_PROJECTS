const express = require("express")
const bodyParser = require("body-parser");

const userRoutes = require ("./routes/users")
const app = express();
const PORT = 5000;


app.use(bodyParser.json());
app.use('/users',userRoutes)

//get request to home page
app.get('/',(request,response)=>{
    console.log("test")
    response.send("Hello home")
});

app.listen(PORT,()=> console.log(`Server running on port: http://localhost:${PORT}`));
