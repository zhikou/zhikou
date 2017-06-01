'use strict';

define([], function() {

    var controller = function($scope, $state, $http, $mdDialog, FileUploader, ZkApi) {
        console.log("image controller")
        $scope.showExample = function(ev) {
            $mdDialog.show({
                    controller: DialogController,
                    templateUrl: 'templates/dialog/imageExample.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: $scope.customFullscreen
                })
                .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });
        }

        function DialogController($scope, $mdDialog) {
            $scope.cancel = function() {
                $mdDialog.cancel();
            };
        }

        var uploader = $scope.uploader = new FileUploader({
            url: 'api/attachments/audio/upload',
            queueLimit:1
        });

        // uploader.filters.push({
        //     name: 'midFilter',
        //     fn: function(item /*{File|FileLikeObject}*/, options) {
        //         var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
        //         var isMid = '|mid|'.indexOf(type) !== -1;
        //         console.log(item);
        //         if (!isMid) {
        //         	alert('请上传mid文件');
        //         }
        //         return isMid;
        //     }
        // })

          uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function() {
            $scope.showRet = true;
        };
        // $scope.showRet = true;

        console.info('uploader', uploader);

        $scope.hideRet = function () {
        	$scope.showRet = false;
        }



    }

    return controller;



})
