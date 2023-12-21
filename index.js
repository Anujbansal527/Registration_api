const express = require('express');
//creatinf instance of express 
const app = express();

//importing dotenv data 
require("dotenv").config();

//import from .env file
const PORT = process.env.PORT || 5000 ;

//for parsering we import express.parser
app.use(express.json());

//for routes import routes
try{
const routes = require("./Routes/route1");
app.use("/api/v1/",routes);
}
catch(err){
    console.log(`error kya hai ${err}`)
}

//creating server add port from .env
app.listen(PORT , () => console.log(`Server start at ${PORT}`));

//database ke liye  import kiya
const dbConnect = require("./Config/database");
dbConnect();

//default path
app.get("/",(req,res) =>{
    res.send("home diretcory");
});