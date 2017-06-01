const co = require("co");
const util = require('util');

module.exports = function(app) {
    var Attachment = app.models.Attachment;

    // console.log(IntentTrainingStatus);

    Attachment.afterRemote('upload', function(ctx, modelInstance, next) {

        console.log(util.inspect(modelInstance, { showHidden: true, depth: null, colors: true })); 
        // {
        //     result: {
        //         files: {
        //             file: [{
        //                     container: 'img',
        //                     name: 'Desert.jpg',
        //                     type: 'image/jpeg',
        //                     field: 'file',
        //                     size: 845941,
        //                     providerResponse: undefined
        //                 },
        //                 [length]: 1
        //             ]
        //         },
        //         fields: {}
        //     }
        // }

        co(function*() {
            var root = app.dataSources["storage"].settings["root"];

            var file = modelInstance.result.files.file[0];
            var fileds = modelInstance.result.fields;

            logger.info("uploaded file : ", file);
            var container = file.container;
            var bot_id = container.split("__")[1];
            var filename = file.name;
            var filepath = path.join(__dirname, "../../" + root + "/" + container + "/" + filename);
            logger.info("file stored at " + filepath);


            if (filename.indexOf('intent') >= 0) {
                yield importIntents(app, bot_id, filepath);
            } else if (filename.indexOf('entity') >= 0) {
                yield importEntities(app, bot_id, filepath);
            } else if (filename.indexOf('dialog') >= 0) {
                yield importDialog(app, bot_id, filepath);
            } else if (filename.indexOf('orchestration') >= 0) {
                // console.log(ctx, modelInstance);
                yield importOrchestration(app, bot_id, filepath);
            } else if (filename.indexOf('script') >= 0) {
                let real_name = fileds.file_name[0];
                yield importScript(app, bot_id, filepath, real_name);
            } else if (filename.indexOf('scenario') >= 0) {
                yield importScenario(app, bot_id, filepath);
            }
        }).then(function() {
            next();
        }).catch(function(err) {
            logger.error("met an error ", err);
            logger.error(err.stack);
            next(err);
        });
    });
}


// var https = require('https'); //Https module of Node.js
// var fs = require('fs'); //FileSystem module of Node.js
// var FormData = require('form-data'); //Pretty multipart form maker.

// var ACCESS_TOKEN = "PUT_FB_ACCESS_TOKEN_HERE";

// var form = new FormData(); //Create multipart form
// form.append('file', fs.createReadStream(__dirname + '/cat.jpg')); //Put file
// form.append('message', "Gaitooo"); //Put message

// //POST request options, notice 'path' has access_token parameter
// var options = {
//     method: 'post',
//     host: 'graph.facebook.com',
//     path: '/me/photos?access_token=' + ACCESS_TOKEN,
//     headers: form.getHeaders(),
// }

// //Do POST request, callback for response
// var request = https.request(options, function(res) {
//     console.log(res);
// });

// //Binds form to request
// form.pipe(request);

// //If anything goes wrong (request-wise not FB)
// request.on('error', function(error) {
//     console.log(error);
// });
