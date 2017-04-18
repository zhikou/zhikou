const sentimentRouter = require("express").Router();
const sentiment = require("./sentiment")

sentimentRouter.get("/",sentiment);


module.exports = sentimentRouter;