"use strict";

define([
    "domReady",
    "angular",
    "jquery",
    "bootstrap",
    "map/controller/Controller",
    "angular-file-upload",
    "angular-resource",
    "map/services/lb-services",
    "angular-ui-router",
    "angular-material",
    "anijs"
], function(domReady, angular, jquery, bootstrap, Controllers, ngMaterial) {
    var app = angular.module("app", [
        "lbServices",
        "ui.router",
        "ngMaterial",
        "angularFileUpload"
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
                .state("API.ImageApi", {
                    url: "/image",
                    templateUrl: "templates/api/ImageApi.html",
                    controller: Controllers["ImageApiController"]
                })
                .state("API.AudioApi", {
                    url: "/audio",
                    templateUrl: "templates/api/AudioApi.html",
                    controller: Controllers["AudioApiController"]
                })
        }])
        .directive('ngThumb', ['$window', function($window) {
            var helper = {
                support: !!($window.FileReader && $window.CanvasRenderingContext2D),
                isFile: function(item) {
                    return angular.isObject(item) && item instanceof $window.File;
                },
                isImage: function(file) {
                    var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
                    return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
                }
            };

            return {
                restrict: 'A',
                template: '<canvas/>',
                link: function(scope, element, attributes) {
                    if (!helper.support) return;

                    var params = scope.$eval(attributes.ngThumb);

                    if (!helper.isFile(params.file)) return;
                    if (!helper.isImage(params.file)) return;

                    var canvas = element.find('canvas');
                    var reader = new FileReader();

                    reader.onload = onLoadFile;
                    reader.readAsDataURL(params.file);

                    function onLoadFile(event) {
                        var img = new Image();
                        img.onload = onLoadImage;
                        img.src = event.target.result;
                    }

                    function onLoadImage() {
                        var width = params.width || this.width / this.height * params.height;
                        var height = params.height || this.height / this.width * params.width;
                        canvas.attr({ width: width, height: height });
                        canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
                    }
                }
            };
        }]);


    require(["domReady!"], function(doc) {
        angular.bootstrap(doc, ['app']);

    });
})
