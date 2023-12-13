const express =require("express");
require("");
const app=express();




app.get("/",(req,res)=>{
    res.send("BOOMMM GUYSSS");

})


//create server

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Server is running on port 3000'); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 8080