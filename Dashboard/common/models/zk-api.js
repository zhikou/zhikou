'use strict';

module.exports = function(Zkapi) {
    var request = require("request");
    const url = "http://9.186.91.141:5000/api/sentiment/v1"
    Zkapi.status = (cb) => {
        var currentDate = new Date();
        var currentHour = currentDate.getHours();
        var OPEN_HOUR = 6;
        var CLOSE_HOUR = 20;
        console.log('Current hour is %d', currentHour);
        var response;
        if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
            response = 'We are open for business.';
        } else {
            response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
        }
        cb(null, response);
    }

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

    Zkapi.remoteMethod('status', {
        http: {
            path: '/status',
            verb: 'get'
        },
        returns: {
            arg: 'status',
            type: 'string'
        }
    })

    Zkapi.remoteMethod('sentiment', {
        http: {
            path: '/sentiment',
            verb: 'post'
        },
        returns: {
            type: 'object',
            root:true
        },
        accepts: [{ arg: 'utterance', type: "object", http: { source: 'body' }, required: true }]
    })

};
