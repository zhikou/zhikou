"use strict";

define([
    "domReady",
    "angular",
    "jquery",
    "bootstrap",
    "map/controller/Controller",
    "angular-ui-router",
    "angular-material"
], function(domReady, angular, jquery, bootstrap, Controllers,ngMaterial) {
    var app = angular.module("app", [
        "ui.router","ngMaterial"
    ])
    console.log(Controllers)

    app.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider,
        $urlRouterProvider) {
    	$urlRouterProvider.when('', '/');
    	// $urlRouterProvider.otherwise('/');
    	$stateProvider
        .state("HomePage",{
            url:"/",
            templateUrl:"templates/api/apiList.html",
            controller:Controllers["HomePageController"]
        })
        .state("Sentiment",{
            url:"/sentiment",
            templateUrl:"templates/api/sentiment.html",
            controller:Controllers["sentimentController"]
        })
        .state("Sentiment.formData",{
            url:"/",
            templateUrl:"templates/api/sentimentForm.html",
            controller:Controllers["sentimentFormController"]
        })
    	.state("Anotherstate",{
    		url:"/another",
    		templateUrl:"templates/another.html"
    	})
    }])

    require(["domReady!"], function(doc) {
        angular.bootstrap(doc, ['app']);
    });
})
