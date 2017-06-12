'use strict';
var express = require("express");
var request = require("request");
var co = require("co");
var thunkify = require("thunkify");
var util = require("util");
var path = require("path");
var fs = require("fs");


module.exports = (app) => {
    let router = express.Router();

    app.use("/api", router);
    app.post("/api/imageApi/upload",  (req, res) => {
        let responseObj = {};


        console.log(req.body,req.files); 

        co(function*() {


            console.log(req.files.ocr_file.path);

            let [response, body] = yield thunkify(request.post)({
                url: "http://9.186.91.141:5001/api/ocr/v1",
                formData:{
                    ocr_file: fs.createReadStream(req.files.ocr_file.path)
                }
            })

            return JSON.parse(body);

        }).then(function(responseObj) {
            res.json(responseObj)
        }).catch(function(err) {
            console.log(err);
            res.json(err)
        })
    })
}
