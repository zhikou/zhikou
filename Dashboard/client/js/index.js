"use strict";

define([
    "domReady",
    "angular",
    "jquery",
    "bootstrap",
    "map/controller/Controller",
    "angular-ui-router"
], function(domReady, angular, jquery, bootstrap, Controllers) {
    var app = angular.module("app", [
        "ui.router"
    ])

    app.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider,
        $urlRouterProvider) {
    	$urlRouterProvider.when('', '/');
    	$urlRouterProvider.otherwise('/');
    	$stateProvider
    	.state("HomePage",{
    		url:"/",
    		templateUrl:"templates/helloworld.html"
    	})
    	.state("Anotherstate",{
    		ukl:"/another",
    		templateUrl:"templates/another.html"
    	})
    }])

    require(["domReady!"], function(doc) {
        angular.bootstrap(doc, ['app']);
    });
})
