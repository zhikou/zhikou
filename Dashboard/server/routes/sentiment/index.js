const sentimentRouter = require("express").Router();
const sentiment = require("./sentiment")

sentimentRouter.post("/",sentiment);


module.exports = sentimentRouter;