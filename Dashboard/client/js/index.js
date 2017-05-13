"use strict";

define([
    "domReady",
    "angular",
    "jquery",
    "bootstrap",
    "map/controller/Controller",
    "angular-resource",
    "map/services/lb-services",
    "angular-ui-router",
    "angular-material",
    "anijs"
], function(domReady, angular, jquery, bootstrap, Controllers, ngMaterial) {
    var app = angular.module("app", [
        "lbServices",
        "ui.router",
        "ngMaterial"
    ])

    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
        $urlRouterProvider) {
        $urlRouterProvider.when('', '/api');
        // $urlRouterProvider.otherwise('/');
        $stateProvider
            .state("API", {
                url: "/api",
                templateUrl: "templates/api/api.html",
                controller: Controllers["APIController"]
            })
            .state("API.List", {
                url: "/list",
                templateUrl: "templates/api/apiList.html",
                controller: Controllers["APIListController"]
            })
            .state("API.Sentiment", {
                url: "/sentiment",
                templateUrl: "templates/api/sentimentForm.html",
                controller: Controllers["sentimentFormController"]
            })
    }])


    require(["domReady!"], function(doc) {
        angular.bootstrap(doc, ['app']);

    });
})
