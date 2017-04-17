#!/usr/bin/env python
#coding:utf-8

#Sentiment API: http://localhost:5000/api/sentiment/v1

from snownlp import SnowNLP
from flask import Flask, jsonify
from flask import abort
from flask import make_response
from flask import request
from flask import url_for

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!\n"
#curl -i -H "Content-Type: application/json" -X POST -d '{"utterance":"我很开心！"}' http://localhost:5000/api/sentiment/v1
@app.route('/api/sentiment/v1', methods=['POST'])
def sentimentAnalysis():
    if not request.json:
        abort(400)

    text = request.json['utterance']
    text_temp = text.replace('.','')
    if(text_temp.isdigit()):
    	value = 0.5
    else:
    	s = SnowNLP(text)
    	value = round(s.sentiments,4)
    return jsonify({'sentiment':value}), 201

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000,debug=True)
