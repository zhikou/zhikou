'use strict';
var express = require("express");
var request = require("request");
var co = require("co");
var thunkify = require("thunkify");
var util = require("util");
var bodyParser = require('body-parser');

module.exports = (app) => {
    let router = express.Router;

    app.use("/api", router);

    router.post("/imageApi/upload", (req, res) => {
    	let responseObj = {};

    	co(function*() {
    		
    		let [response,body] = yield thunkify(request.post)({
    			url:"url",
    			headers:{
    				"content-length": req.headers["content-length"],
                    "content-type": req.headers["content-type"]
    			},
    			body:req.rawBody
    		})

    		return body;

    	}).then(function (responseObj) {
    		res.json(responseObj)
    	}).catch(function (err) {
    		console.log(err);
    		res.json(err)
    	})
    })
}



// co(function*() {
//             logger.info("receive customizedQA and start to pro[cess : ", req.body);
//             logger.info("=================================================================")
//             logger.info(req.rawBody);
//             logger.info("=================================================================")

//             var [response, body] = yield thunkify(request.post)({
//                 url: "http://9.186.52.178:8081/deep-qa-web-1.2/api/FileUpload",
//                 headers: {
//                     "content-length": req.headers["content-length"],
//                     "content-type": req.headers["content-type"]
//                 },
//                 body: req.rawBody
//             })

//             logger.debug("=================================================================")
//             logger.debug("RESPONSE : ", body);
//             logger.debug("=================================================================")
//             return body;
//         }).then(function(responseObj) {
//             res.json(responseObj);
//         }).catch(function(error) {
//             logger.error(error.stack);
//             res.json(error);
//         });