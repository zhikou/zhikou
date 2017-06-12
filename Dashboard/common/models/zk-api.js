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


};
