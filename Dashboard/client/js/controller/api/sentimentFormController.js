define([], function() {

    var controller = function($scope, $state, $http, ZkApi) {
        $scope.message = "";
        $scope.showProgress = false;
        $scope.analyze_result = {};
        $scope.start_analyze = function() {
            if (!$scope.message.trim()) {
                return;
            }
            $scope.showProgress = true;
            ZkApi.sentiment({
                utterance: $scope.message.trim()
            }).$promise.then((sentiment) => {
                $scope.analyze_result = sentiment;
                $scope.ret_position();
            })
        }

        $scope.ret_position = function () {
            let ret = $scope.analyze_result.sentiment;
            if (ret) {
                $scope.showPosition = true;
                // console.log(ret);
                if (Math.round(ret) == 0) {
                    console.log($scope.utilToPercent(ret));
                    return {
                        left: $scope.utilToPercent(ret)
                    }
                }else if (Math.round(ret) == 1) {
                    console.log($scope.utilToPercent(ret));
                    return {
                        right: $scope.utilToPercent(1-ret)
                    }
                }

                return;
            }
            $scope.showPosition =false;
        }

        $scope.utilToPercent = function (num) {
            num = parseFloat(num);
            return num * 100 + "%";
        }



    }

    return controller;



})
