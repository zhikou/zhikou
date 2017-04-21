var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  // mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  path = require('path');
  
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb'); 

const public = path.join(__dirname,"../client/")
// console.log(public);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
//set static resource
app.use(express.static(public))

var routes = require('./routes');
app.use("/", routes)


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
