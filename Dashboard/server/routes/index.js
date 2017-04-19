const routes = require('express').Router()
const models = require('./models');
const cars = require('./cars');
const sentiment = require("./sentiment");
const path = require('path');
const index = path.join(__dirname,"../../client/index.html")
routes.get("/",(req,res)=>{
	res.status(200).sendFile(index);
})

routes.use('/models', models);
routes.use('/cars', cars);
routes.use("/sentiment",sentiment)

module.exports = routes;
