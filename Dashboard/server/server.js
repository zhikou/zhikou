var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');
  
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes');
app.use("/", routes)


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
