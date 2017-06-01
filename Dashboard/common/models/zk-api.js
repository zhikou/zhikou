'use strict';

module.exports = function(Zkapi) {
    var request = require("request");
    const url = "http://9.186.91.141:5000/api/sentiment/v1"

    //sentiment
    Zkapi.sentiment = (utterance, cb) => {

        request.post({
            url: url,
            body: utterance,
            json: true
        }, (err, response, body) => {
            if (err) {
                console.log(err)
                cb(err)
            }
            cb(null, body)
        })
    }

    Zkapi.remoteMethod('sentiment', {
        http: {
            path: '/sentiment',
            verb: 'post'
        },
        returns: {
            type: 'object',
            root: true
        },
        accepts: [{ arg: 'utterance', type: "object", http: { source: 'body' }, required: true }]
    })

    //images
    // Zkapi.imageApi = () => {

    // }

};









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









// module.exports = function(user) {
//     user.upload = function(req, res, cb) {
//         var Container = user.app.models.Container;
//         Container.createContainer({ name: user.name }, function(err, c) {
//             Container.upload(req, res, { container: c.name }, cb)
//         });
//     }
//     user.remoteMethod(
//         'upload', {
//             http: { path: '/:id/uploadDisplayPic', verb: 'post' },
//             accepts: [
//                 { arg: 'req', type: 'object', 'http': { source: 'req' } },
//                 { arg: 'res', type: 'object', 'http': { source: 'res' } }
//             ],
//             returns: { arg: 'status', type: 'string' }
//         }
//     );
// };
