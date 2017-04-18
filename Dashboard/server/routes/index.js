const routes = require('express').Router()
const models = require('./models');
const cars = require('./cars');
const sentiment = require("./sentiment")
routes.get("/",(req,res)=>{
	res.status(200).json({message:"connected"})
})

routes.use('/models', models);
routes.use('/cars', cars);
routes.use("/sentiment",sentiment)

module.exports = routes;
